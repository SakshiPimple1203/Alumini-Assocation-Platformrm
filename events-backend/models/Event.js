const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
});

// Check if the model already exists, if so, use it, otherwise create a new one
module.exports = mongoose.models.Event || mongoose.model('Event', eventSchema);
