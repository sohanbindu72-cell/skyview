const express = require('express');
const router = express.Router();
const { query, execute } = require('../config/db');

router.get('/', async (req, res) => {
  try {
    const results = await query(`
      SELECT p.id, p.id as _id, p.name, p.base_price as basePrice, p.description, p.features, 
             p.is_active as isActive, p.is_popular as isPopular, p.rank_order as rankOrder,
             COUNT(r.id) as totalOrders,
             COALESCE(SUM(r.total_amount), 0) as totalRevenue
      FROM service_packages p
      LEFT JOIN reservations r ON p.id = r.package_id AND r.status != 'Cancelled'
      GROUP BY p.id
      ORDER BY p.rank_order ASC
    `);

    const packages = results.map(pkg => {
      let parsedFeatures = [];
      try {
        parsedFeatures = typeof pkg.features === 'string' ? JSON.parse(pkg.features) : pkg.features || [];
      } catch (e) {}

      return {
        ...pkg,
        features: parsedFeatures,
        isActive: Boolean(pkg.isActive),
        isPopular: Boolean(pkg.isPopular)
      };
    });

    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const results = await query(`
      SELECT p.id, p.id as _id, p.name, p.base_price as basePrice, p.description, p.features, 
             p.is_active as isActive, p.is_popular as isPopular, p.rank_order as rankOrder,
             COUNT(r.id) as totalOrders,
             COALESCE(SUM(r.total_amount), 0) as totalRevenue
      FROM service_packages p
      LEFT JOIN reservations r ON p.id = r.package_id AND r.status != 'Cancelled'
      WHERE p.id = ?
      GROUP BY p.id
    `, [id]);

    if (results.length === 0) return res.status(404).json({ message: 'Package not found' });

    let pkg = results[0];
    let parsedFeatures = [];
    try {
      parsedFeatures = typeof pkg.features === 'string' ? JSON.parse(pkg.features) : pkg.features || [];
    } catch (e) {}

    res.json({
      ...pkg,
      features: parsedFeatures,
      isActive: Boolean(pkg.isActive),
      isPopular: Boolean(pkg.isPopular)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, basePrice, description, features, isActive, isPopular, rankOrder } = req.body;
    
    const sql = `
      INSERT INTO service_packages (name, base_price, description, features, is_active, is_popular, rank_order)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
      name, 
      basePrice, 
      description, 
      JSON.stringify(features || []), 
      isActive ? 1 : 0, 
      isPopular ? 1 : 0, 
      rankOrder || 0
    ];

    const result = await execute(sql, params);
    res.status(201).json({ id: result.insertId, message: 'Package created' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    let fields = [];
    let params = [];
    
    const mapping = {
      name: 'name',
      basePrice: 'base_price',
      description: 'description',
      features: 'features',
      isActive: 'is_active',
      isPopular: 'is_popular',
      rankOrder: 'rank_order'
    };

    for (const [key, col] of Object.entries(mapping)) {
      if (data[key] !== undefined) {
        fields.push(`${col} = ?`);
        params.push(key === 'features' ? JSON.stringify(data[key]) : 
                   (key === 'isActive' || key === 'isPopular' ? (data[key] ? 1 : 0) : data[key]));
      }
    }

    if (fields.length === 0) {
      return res.status(400).json({ message: 'No fields provided' });
    }

    params.push(id);
    const sql = `UPDATE service_packages SET ${fields.join(', ')} WHERE id = ?`;
    await execute(sql, params);
    
    res.json({ message: 'Updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await execute("DELETE FROM service_packages WHERE id = ?", [id]);
        res.json({ message: "Package deleted successfully" });
    } catch(err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
