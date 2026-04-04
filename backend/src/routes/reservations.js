const express = require('express');
const router = express.Router();
const { query, execute } = require('../config/db');

router.get('/', async (req, res) => {
  try {
    const sql = `
      SELECT r.*, 
             l1.country_name as from_country, l2.country_name as to_country 
      FROM reservations r
      LEFT JOIN locations l1 ON r.from_location_id = l1.id
      LEFT JOIN locations l2 ON r.to_location_id = l2.id
      ORDER BY r.created_at DESC
    `;
    const results = await query(sql);
    
    const reservations = results.map(row => ({
      _id: row.id,
      id: row.id,
      customerName: row.customer_name,
      customerEmail: row.customer_email,
      customerPhone: row.customer_phone,
      fromLocationId: row.from_location_id,
      fromAirport: row.from_airport,
      toLocationId: row.to_location_id,
      toAirport: row.to_airport,
      departureDate: row.departure_date,
      returnDate: row.return_date,
      passengers: row.passengers,
      serviceLevel: row.service_level,
      status: row.status,
      totalAmount: row.total_amount,
      paymentStatus: row.payment_status,
      notes: row.notes,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      fromLocation: { id: row.from_location_id, countryName: row.from_country },
      toLocation: row.to_location_id ? { id: row.to_location_id, countryName: row.to_country } : null
    }));
    
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `
      SELECT r.*, 
             l1.country_name as from_country, l2.country_name as to_country 
      FROM reservations r
      LEFT JOIN locations l1 ON r.from_location_id = l1.id
      LEFT JOIN locations l2 ON r.to_location_id = l2.id
      WHERE r.id = ?
    `;
    const results = await query(sql, [id]);
    
    if (results.length === 0) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    
    const row = results[0];
    const reservation = {
      _id: row.id,
      id: row.id,
      customerName: row.customer_name,
      customerEmail: row.customer_email,
      customerPhone: row.customer_phone,
      fromLocationId: row.from_location_id,
      fromAirport: row.from_airport,
      toLocationId: row.to_location_id,
      toAirport: row.to_airport,
      departureDate: row.departure_date,
      returnDate: row.return_date,
      passengers: row.passengers,
      serviceLevel: row.service_level,
      status: row.status,
      totalAmount: row.total_amount,
      paymentStatus: row.payment_status,
      notes: row.notes,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      fromLocation: { id: row.from_location_id, countryName: row.from_country },
      toLocation: row.to_location_id ? { id: row.to_location_id, countryName: row.to_country } : null
    };
    
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const sql = `
      INSERT INTO reservations (
        customer_name, customer_email, customer_phone, 
        from_location_id, from_airport, to_location_id, to_airport, 
        departure_date, return_date, passengers, service_level, total_amount, status, payment_status, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const params = [
      data.customerName || data.customer_name || 'Guest User',
      data.customerEmail || data.customer_email || 'no-email@example.com',
      data.customerPhone || data.customer_phone || 'N/A',
      data.fromLocationId || data.fromLocation || data.from_location_id || null,
      data.fromAirport || data.from_airport || null,
      data.toLocationId || data.to_location_id || null,
      data.toAirport || data.to_airport || null,
      data.departureDate || data.departure_date || null,
      data.returnDate || data.return_date || null,
      data.passengers || 1,
      data.serviceLevel || data.service_level || 'Premium',
      data.totalAmount || data.total_amount || 0,
      data.status || 'Pending',
      data.paymentStatus || data.payment_status || 'Unpaid',
      data.notes || null
    ];
    
    // Ensure absolutely no strictly undefined values exist that crash mysql2
    for (let i = 0; i < params.length; i++) {
        if (params[i] === undefined) params[i] = null;
    }
    
    const result = await execute(sql, params);
    res.status(201).json({ id: result.insertId, message: 'Reservation created successfully' });
  } catch (error) {
    console.error('Reservation POST error:', error);
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
      customerName: 'customer_name',
      customerEmail: 'customer_email',
      customerPhone: 'customer_phone',
      fromLocationId: 'from_location_id',
      fromAirport: 'from_airport',
      toLocationId: 'to_location_id',
      toAirport: 'to_airport',
      departureDate: 'departure_date',
      returnDate: 'return_date',
      passengers: 'passengers',
      serviceLevel: 'service_level',
      status: 'status',
      totalAmount: 'total_amount',
      paymentStatus: 'payment_status',
      notes: 'notes'
    };

    for (const [key, col] of Object.entries(mapping)) {
      if (data[key] !== undefined) {
        fields.push(`${col} = ?`);
        params.push(data[key]);
      }
    }

    if (fields.length === 0) {
      return res.status(400).json({ message: 'No fields provided' });
    }

    params.push(id);
    const sql = `UPDATE reservations SET ${fields.join(', ')} WHERE id = ?`;
    await execute(sql, params);
    res.json({ message: 'Updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await execute('DELETE FROM reservations WHERE id = ?', [id]);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
