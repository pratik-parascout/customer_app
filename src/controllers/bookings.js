const { Appointment, Service, User } = require('shared-library');

const createBooking = async (req, res) => {
  const { userId, serviceId, appointmentDate, comments } = req.body;
  try {
    const appointment = await Appointment.create({
      appointmentDate,
      status: 'pending',
      comments,
      UserId: userId,
      ServiceId: serviceId,
    });
    res.status(201).json({ message: 'Booking created', appointment });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getCustomerBookings = async (req, res) => {
  const { userId } = req.query;
  try {
    const appointments = await Appointment.findAll({
      where: { UserId: userId },
    });
    res.json({ appointments });
  } catch (error) {
    console.error('Fetch bookings error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createBooking, getCustomerBookings };
