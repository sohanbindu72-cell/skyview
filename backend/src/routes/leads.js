const express = require('express');
const router = express.Router();
const { query, execute } = require('../config/db');
const { sendLeadEmail } = require('../utils/mailer');

router.get('/', async (req, res) => {
  try {
    const leads = await query('SELECT *, id as _id FROM leads ORDER BY created_at DESC');
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const sql = `
      INSERT INTO leads (email, airport, service_type, date, passengers, status)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [
      data.email,
      data.airport,
      data.serviceType || data.service_type,
      data.date,
      data.passengers,
      data.status || 'Inquiry'
    ];
    
    const result = await execute(sql, params);
    
    // Dispatch automated lead pricing inquiry email
    if (data.email) {
      try {
         let activePackages = await query('SELECT * FROM service_packages WHERE is_active = 1');

         if (data.airport) {
             const airportRes = await query('SELECT id FROM airports WHERE name = ?', [data.airport]);
             if (airportRes.length > 0) {
                 const airportId = airportRes[0].id;
                 const customQuery = `
                     SELECT sp.*, COALESCE(app.custom_price, sp.base_price) as custom_base_price 
                     FROM service_packages sp
                     LEFT JOIN airport_package_pricing app ON app.package_id = sp.id AND app.airport_id = ?
                     LEFT JOIN airport_excluded_packages aep ON aep.package_id = sp.id AND aep.airport_id = ?
                     WHERE sp.is_active = 1 AND aep.package_id IS NULL
                 `;
                 const customPackages = await query(customQuery, [airportId, airportId]);
                 activePackages = customPackages.map(p => ({
                     ...p,
                     base_price: p.custom_base_price
                 }));
             }
         }

         await sendLeadEmail(data.email, data.serviceType || data.service_type, activePackages);
      } catch (mailError) {
         console.error('Lead Mailer error:', mailError);
      }
    }

    res.status(201).json({ id: result.insertId, message: 'Lead added successfully' });
  } catch (error) {
    console.error('Lead error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    await execute('UPDATE leads SET status = ? WHERE id = ?', [status, id]);
    res.json({ message: 'Lead updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await execute('DELETE FROM leads WHERE id = ?', [id]);
    res.json({ message: 'Lead deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
