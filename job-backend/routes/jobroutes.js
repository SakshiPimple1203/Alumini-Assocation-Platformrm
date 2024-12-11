const express = require('express');
const Job = require('../models/job');

const router = express.Router();

// Create Job
router.post('/', async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Fetch Jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Search Jobs
router.get('/search', async (req, res) => {
    const { title, description, location, company } = req.query;
    const query = {};

    if (title) query.title = { $regex: title, $options: 'i' };
    if (description) query.description = { $regex: description, $options: 'i' };
    if (location) query.location = { $regex: location, $options: 'i' };
    if (company) query.company = { $regex: company, $options: 'i' };

    try {
        const jobs = await Job.find(query);
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
