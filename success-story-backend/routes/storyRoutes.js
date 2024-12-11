const express = require('express');
const Story = require('../models/Story');
const router = express.Router();

// Add a new story
router.post('/', async (req, res) => {
    try {
        const newStory = new Story(req.body);
        const savedStory = await newStory.save();
        res.status(201).json(savedStory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all stories
router.get('/', async (req, res) => {
    try {
        const stories = await Story.find();
        res.status(200).json(stories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
