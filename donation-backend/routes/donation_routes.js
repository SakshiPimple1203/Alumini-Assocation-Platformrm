const express = require('express');
const router = express.Router();
const Donation = require('../models/donation_models');

// Route to create a new donation
router.post('/', async (req, res) => {
    try {
        console.log('Received POST data:', req.body); // Debugging log
        const newDonation = new Donation(req.body);
        const savedDonation = await newDonation.save();
        console.log('Successfully saved donation:', savedDonation); // Debugging log
        res.status(201).json(savedDonation);
    } catch (err) {
        console.error('Error saving donation:', err); // Debugging log
        res.status(500).json({ error: err.message });
    }
});

// Route to get all donations
router.get('/', async (req, res) => {
    try {
        const donations = await Donation.find();
        res.status(200).json(donations);
    } catch (err) {
        console.error('Error fetching donations:', err); // Debugging log
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
