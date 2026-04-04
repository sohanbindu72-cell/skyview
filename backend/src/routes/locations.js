const express = require('express');
const router = express.Router();
const { query, execute } = require('../config/db');

router.get('/', async (req, res) => {
  try {
    const locations = await query('SELECT id, country_name as countryName, flag_icon as flagIcon FROM locations ORDER BY country_name ASC');
    
    for (let location of locations) {
      location.airports = await query('SELECT id, name, link, note FROM airports WHERE location_id = ?', [location.id]);
      
      for (let airport of location.airports) {
        const excluded = await query('SELECT package_id FROM airport_excluded_packages WHERE airport_id = ?', [airport.id]);
        airport.excludedPackages = excluded.map(e => e.package_id);

        const pricing = await query('SELECT package_id, custom_price FROM airport_package_pricing WHERE airport_id = ?', [airport.id]);
        airport.customPricing = pricing; // format: [{ package_id: 1, custom_price: 199.99 }, ...]
      }
    }
    
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { countryName, flagIcon, airports } = req.body;
    const result = await execute('INSERT INTO locations (country_name, flag_icon) VALUES (?, ?)', [countryName, flagIcon]);
    const locationId = result.insertId;

    if (Array.isArray(airports)) {
      for (const airport of airports) {
        const airportResult = await execute('INSERT INTO airports (location_id, name, link, note) VALUES (?, ?, ?, ?)', [locationId, airport.name, airport.link, airport.note || null]);
        const airportId = airportResult.insertId;
        
        if (Array.isArray(airport.excludedPackages)) {
          for (const pkgId of airport.excludedPackages) {
            await execute('INSERT INTO airport_excluded_packages (airport_id, package_id) VALUES (?, ?)', [airportId, pkgId]);
          }
        }
        if (Array.isArray(airport.customPricing)) {
          for (const pricing of airport.customPricing) {
            if (pricing.custom_price != null && pricing.custom_price !== '') {
               await execute('INSERT INTO airport_package_pricing (airport_id, package_id, custom_price) VALUES (?, ?, ?)', [airportId, pricing.package_id, pricing.custom_price]);
            }
          }
        }
      }
    }
    
    res.status(201).json({ id: locationId, message: 'Location created' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { countryName, flagIcon, airports } = req.body;
    
    await execute('UPDATE locations SET country_name = ?, flag_icon = ? WHERE id = ?', [countryName, flagIcon, id]);
    
    // Simplest way to update nested airports and exclusions: Delete all existing and re-insert the new list
    await execute('DELETE FROM airports WHERE location_id = ?', [id]);
    
    if (Array.isArray(airports)) {
      for (const airport of airports) {
        const airportResult = await execute('INSERT INTO airports (location_id, name, link, note) VALUES (?, ?, ?, ?)', [id, airport.name, airport.link, airport.note || null]);
        const airportId = airportResult.insertId;
        
        if (Array.isArray(airport.excludedPackages)) {
          for (const pkgId of airport.excludedPackages) {
            await execute('INSERT INTO airport_excluded_packages (airport_id, package_id) VALUES (?, ?)', [airportId, pkgId]);
          }
        }
        if (Array.isArray(airport.customPricing)) {
          for (const pricing of airport.customPricing) {
            if (pricing.custom_price != null && pricing.custom_price !== '') {
               await execute('INSERT INTO airport_package_pricing (airport_id, package_id, custom_price) VALUES (?, ?, ?)', [airportId, pricing.package_id, pricing.custom_price]);
            }
          }
        }
      }
    }
    
    res.json({ message: 'Location updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await execute('DELETE FROM locations WHERE id = ?', [id]);
    res.json({ message: 'Location deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
