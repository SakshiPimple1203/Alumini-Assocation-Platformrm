const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// Create an event
router.post('/create', async (req, res) => {
    try {
        const { title, description, date, location } = req.body;
        
        // Get today's date
        const currentDate = new Date();

        // Convert the input date to a Date object
        const eventDate = new Date(date);
        
        // Check if the event date is in the future (it should be equal to or greater than the current date)
        if (eventDate < currentDate) {
            return res.status(400).json({ 
                error: 'Cannot schedule events for past dates. Please select a future date.' 
            });
        }

        const event = new Event({ title, description, date: eventDate, location });
        await event.save();
        res.status(201).json({ message: 'Event created successfully', event });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Error creating event', details: error.message });
    }
});

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find().sort({ date: 1 }); // Sorted by date
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Error fetching events', details: error.message });
    }
});

module.exports = router;
