require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/bookings');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Salon Customer App');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Customer app running on port ${PORT}`);
});
