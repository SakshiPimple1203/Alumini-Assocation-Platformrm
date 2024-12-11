const express = require('express');
const Registration = require('../models/Registration');
const Event = require('../models/Event');
const router = express.Router();

// Register for an event
router.post('/register', async (req, res) => {
  try {
    const { name, email, event } = req.body;

    if (!name || !email || !event) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const eventExists = await Event.findById(event);
    if (!eventExists) {
      return res.status(404).json({ error: 'Event not found.' });
    }

    const registration = new Registration({ name, email, event });
    await registration.save();
    res.status(201).json({ message: 'Registration successful.', registration });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Error registering user', details: error.message });
  }
});

// Get all registered users
router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.find().populate('event', 'title date');
    res.status(200).json(registrations);
  } catch (error) {
    console.error('Error fetching registered users:', error);
    res.status(500).json({ error: 'Error fetching registered users', details: error.message });
  }
});

module.exports = router;
