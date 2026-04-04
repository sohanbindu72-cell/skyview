const express = require('express');
const router = express.Router();
const { query, execute } = require('../config/db');
const bcrypt = require('bcryptjs');
const { sendWelcomeEmail } = require('../utils/mailer');

// Check if user exists by email
router.get('/', async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) return res.status(400).json({ message: 'Email required' });
    
    const results = await query('SELECT id, name, email, phone, is_password_temp FROM users WHERE email = ?', [email]);
    if (results.length > 0) {
      const user = results[0];
      return res.json({ id: user.id, name: user.name, email: user.email, is_password_temp: user.is_password_temp });
    }
    res.json(null); // Return null exactly as frontend actions/booking.js expects when user not found
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create new user (and trigger email)
router.post('/', async (req, res) => {
  try {
    const { name, email, password, phone, isPasswordTemp } = req.body;
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const sql = 'INSERT INTO users (name, email, password, phone, is_password_temp) VALUES (?, ?, ?, ?, ?)';
    const result = await execute(sql, [name, email, hashedPassword, phone || null, isPasswordTemp ? 1 : 0]);
    
    // Trigger welcome email upon auto-registration
    if (isPasswordTemp) {
       await sendWelcomeEmail(email, name, password);
    }
    
    res.status(201).json({ id: result.insertId, message: 'User created successfully' });
  } catch (error) {
    console.error('Create User Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update user (specifically for regenerating password)
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { password, isPasswordTemp } = req.body;
    
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      await execute('UPDATE users SET password = ?, is_password_temp = ? WHERE id = ?', [hashedPassword, isPasswordTemp ? 1 : 0, id]);
      
      if (isPasswordTemp) {
         const users = await query('SELECT name, email FROM users WHERE id = ?', [id]);
         if (users.length > 0) {
            await sendWelcomeEmail(users[0].email, users[0].name, password);
         }
      }
    }
    
    res.json({ message: 'User updated' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Ideally this should use authentication middleware to get req.user.id
// For now, depending on how frontend sends requests, we'll try to extract token or just serve all for demo
// if the frontend passes user email or id as query/body we can use it.
router.get('/bookings', async (req, res) => {
  try {
    // Basic implementation since we lack exact JWT middleware in this snippet
    // You would normally decode JWT and get user.email or user.id
    // Assuming pass through for now or fetch all
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    const token = authHeader.split(' ')[1];
    const jwt = require('jsonwebtoken');
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_key');
    
    const bookings = await query(`
      SELECT r.*, r.id as _id, 
        l1.country_name as from_country, l2.country_name as to_country 
      FROM reservations r
      LEFT JOIN locations l1 ON r.from_location_id = l1.id
      LEFT JOIN locations l2 ON r.to_location_id = l2.id
      WHERE r.customer_email = ?
      ORDER BY r.created_at DESC
    `, [decoded.email]);
    
    const formattedBookings = bookings.map(row => ({
      ...row,
      _id: row.id,
      fromLocation: { id: row.from_location_id, countryName: row.from_country },
      toLocation: row.to_location_id ? { id: row.to_location_id, countryName: row.to_country } : null
    }));

    res.json(formattedBookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await execute('DELETE FROM users WHERE id = ?', [id]);
    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
