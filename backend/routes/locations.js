const express = require('express');
const Location = require('../models/Location');

const router = express.Router();

// @route   GET /api/locations
// @desc    Get all locations
// @access  Public
router.get('/', async (req, res) => {
  try {
    const locations = await Location.find({}).sort({ countryName: 1 });
    res.json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
