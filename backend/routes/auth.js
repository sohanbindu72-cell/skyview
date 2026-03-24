const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// @route   POST /api/auth/login
// @desc    Authenticate admin & get token
// @access  Public
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const payload = {
      id: admin._id,
      username: admin.username
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || 'fallback_secret_key', {
      expiresIn: '30d'
    });

    res.json({
      _id: admin._id,
      username: admin.username,
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// @route   GET /api/auth/verify
// @desc    Verify if token is valid
// @access  Private
router.get('/verify', protect, (req, res) => {
  res.json({ valid: true, admin: req.admin });
});

module.exports = router;
