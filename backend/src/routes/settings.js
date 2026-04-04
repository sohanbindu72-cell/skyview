const express = require('express');
const router = express.Router();
const { query, execute } = require('../config/db');

// Add the table creation here safely to ensure it exists
const initializeSettingsTable = async () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS settings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      setting_key VARCHAR(255) NOT NULL UNIQUE,
      setting_value TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );`;
    try {
        await execute(sql);
    } catch (e) {
        console.error('Error initializing settings table:', e);
    }
};

initializeSettingsTable();

// GET all settings
router.get('/', async (req, res) => {
  try {
    const results = await query('SELECT setting_key, setting_value FROM settings');
    const settings = {};
    results.forEach(row => {
      settings[row.setting_key] = row.setting_value;
    });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET specific setting
router.get('/:key', async (req, res) => {
  try {
    const { key } = req.params;
    const results = await query('SELECT setting_value FROM settings WHERE setting_key = ?', [key]);
    if (results.length === 0) {
      return res.status(404).json({ message: 'Setting not found' });
    }
    res.json({ value: results[0].setting_value });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// PUT / UPDATE multiple settings
router.put('/', async (req, res) => {
  try {
    const settings = req.body; // Expects an object { key: 'value', ... }
    
    // Process sequentially or in transaction (sequential is fine for settings)
    for (const [sKey, sValue] of Object.entries(settings)) {
      if (sValue !== undefined && sValue !== null) {
          const sql = `
            INSERT INTO settings (setting_key, setting_value) 
            VALUES (?, ?) 
            ON DUPLICATE KEY UPDATE setting_value = ?
          `;
          await execute(sql, [sKey, sValue.toString(), sValue.toString()]);
      }
    }
    
    res.json({ message: 'Settings updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
