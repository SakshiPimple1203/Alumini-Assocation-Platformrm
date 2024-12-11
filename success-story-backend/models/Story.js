const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    name: { type: String, required: true },
    yearOfPassing: { type: Number, required: true },
    branch: { type: String, required: true },
    achievement: { type: String, required: true },
    contribution: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Story', storySchema);
