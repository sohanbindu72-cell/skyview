const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Routes
const authRoutes = require('./routes/auth');
const locationRoutes = require('./routes/locations');
const reservationRoutes = require('./routes/reservations');
const packageRoutes = require('./routes/packages');
const leadsRoutes = require('./routes/leads');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const settingsRoutes = require('./routes/settings');

app.use('/api/auth', authRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/leads', leadsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/settings', settingsRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

