const express = require('express');
const Story = require('../models/story');

const router = express.Router();

// Create a new story
router.post('/', async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.status(201).json(story);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all stories
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
