const express = require('express');
const router = express.Router();
const { query } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admins = await query('SELECT * FROM admins WHERE username = ?', [username]);
    
    if (admins.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const admin = admins[0];
    const isMatch = await bcrypt.compare(password, admin.password);
    
    if (isMatch) {
      const token = jwt.sign(
        { id: admin.id, username: admin.username }, 
        process.env.JWT_SECRET || 'fallback_secret_key',
        { expiresIn: '12h' }
      );
      
      res.json({
        token,
        user: { id: admin.id, username: admin.username }
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/user/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await query('SELECT * FROM users WHERE email = ?', [email]);
    
    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (isMatch) {
      const token = jwt.sign(
        { id: user.id, email: user.email }, 
        process.env.JWT_SECRET || 'fallback_secret_key',
        { expiresIn: '12h' }
      );
      
      res.json({
        token,
        user: { id: user.id, name: user.name, email: user.email }
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/logout', (req, res) => {
  // In a stateless JWT setup, logout is typically handled client-side by deleting the token.
  // We can just return success here.
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;
