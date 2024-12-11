const express = require('express');
const Profile = require('../models/Profile'); // Mongoose model
const router = express.Router();

// Create a Profile
router.post('/', async (req, res) => {
    try {
        const profile = new Profile(req.body);
        const savedProfile = await profile.save();
        res.status(201).json(savedProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Dynamic Search Profiles
router.get('/search', async (req, res) => {
    const { name, branch, presentCompany, presentLocation, yearOfPassing, presentTechnicalWork } = req.query;

    const query = {};
    if (name) query.name = new RegExp(name, 'i');
    if (branch) query.branch = new RegExp(branch, 'i');
    if (presentCompany) query.presentCompany = new RegExp(presentCompany, 'i');
    if (presentLocation) query.presentLocation = new RegExp(presentLocation, 'i');
    if (yearOfPassing) query.yearOfPassing = yearOfPassing;
    if (presentTechnicalWork) query.presentTechnicalWork = new RegExp(presentTechnicalWork, 'i');

    try {
        const profiles = await Profile.find(query);
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a Profile by Name
router.put('/update-by-name', async (req, res) => {
    const { name, presentCompany, presentLocation, presentTechnicalWork, presentRole } = req.body;

    try {
        const updatedProfile = await Profile.findOneAndUpdate(
            { name },
            { presentCompany, presentLocation, presentTechnicalWork, presentRole },
            { new: true }
        );

        if (!updatedProfile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        res.json(updatedProfile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a Profile by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedProfile = await Profile.findByIdAndDelete(req.params.id);
        if (!deletedProfile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.json({ message: "Profile deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
