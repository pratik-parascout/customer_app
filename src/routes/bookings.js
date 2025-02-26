const express = require('express');
const router = express.Router();

const {
  createBooking,
  getCustomerBookings,
} = require('../controllers/bookings');

router.post('/', createBooking);

router.get('/', getCustomerBookings);

module.exports = router;
