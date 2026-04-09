const express = require('express');
const router = express.Router();
const { query, execute } = require('../config/db');

// Get all airport pages (Admin)
router.get('/', async (req, res) => {
  try {
    const pages = await query('SELECT * FROM airport_pages ORDER BY created_at DESC');
    res.json(pages);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get a specific airport page by slug (Public)
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const pages = await query('SELECT * FROM airport_pages WHERE slug = ?', [slug]);
    
    if (pages.length === 0) {
      return res.status(404).json({ message: 'Airport page not found' });
    }
    
    res.json(pages[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create a new airport page (Admin)
router.post('/', async (req, res) => {
  try {
    const { slug, page_title, meta_description, hero_image_url, content, is_published } = req.body;
    
    // Check if slug already exists
    const existing = await query('SELECT id FROM airport_pages WHERE slug = ?', [slug]);
    if (existing.length > 0) {
      return res.status(400).json({ message: 'A page with this URL slug already exists.' });
    }

    const result = await execute(
      'INSERT INTO airport_pages (slug, page_title, meta_description, hero_image_url, content, is_published) VALUES (?, ?, ?, ?, ?, ?)',
      [slug, page_title, meta_description, hero_image_url, content, is_published !== undefined ? is_published : true]
    );
    
    res.status(201).json({ id: result.insertId, message: 'Airport page created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update an existing airport page (Admin)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { slug, page_title, meta_description, hero_image_url, content, is_published } = req.body;
    
    // Check if slug exists for another page
    const existing = await query('SELECT id FROM airport_pages WHERE slug = ? AND id != ?', [slug, id]);
    if (existing.length > 0) {
      return res.status(400).json({ message: 'A page with this URL slug already exists.' });
    }

    await execute(
      'UPDATE airport_pages SET slug = ?, page_title = ?, meta_description = ?, hero_image_url = ?, content = ?, is_published = ? WHERE id = ?',
      [slug, page_title, meta_description, hero_image_url, content, is_published, id]
    );
    
    res.json({ message: 'Airport page updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete an airport page (Admin)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await execute('DELETE FROM airport_pages WHERE id = ?', [id]);
    res.json({ message: 'Airport page deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
