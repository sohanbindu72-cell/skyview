const express = require('express');
const router = express.Router();
const { query, execute } = require('../config/db');

router.get('/transactions', async (req, res) => {
  try {
    const transactions = await query(`
      SELECT t.*, t.id as _id, r.customer_name, r.customer_email 
      FROM transactions t
      JOIN reservations r ON t.reservation_id = r.id
      ORDER BY t.created_at DESC
    `);
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/transactions/refund', async (req, res) => {
  try {
    const { transactionId } = req.body;
    
    // Simplistic refund logic for demo
    await execute('UPDATE transactions SET status = "Refunded" WHERE id = ?', [transactionId]);
    res.json({ message: 'Refund successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.get('/analytics/revenue', async (req, res) => {
  try {
    const results = await query(`
      SELECT SUM(total_amount) as totalRevenue, COUNT(*) as totalBookings
      FROM reservations WHERE status != 'Cancelled'
    `);
    
    const total = Number(results[0].totalRevenue) || 0;
    
    // Monthly revenue simulation or aggregated
    res.json([
      { name: 'Jan', total: 0 },
      { name: 'Feb', total: 0 },
      { name: 'Mar', total: 0 },
      { name: 'Apr', total: 0 },
      { name: 'May', total: 0 },
      { name: 'Jun', total: total }
    ]);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.get('/customers', async (req, res) => {
  try {
    const { email } = req.query;
    let sql = 'SELECT * FROM users';
    let params = [];
    
    if (email) {
      sql += ' WHERE email LIKE ?';
      params.push(`%${email}%`);
    }
    
    const customers = await query(sql, params);
    res.json(customers.map(c => ({...c, _id: c.id})));
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
