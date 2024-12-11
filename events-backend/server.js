const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express App
const app = express();
const PORT = 5003;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/eventsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Event Schema
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
});

const Event = mongoose.model('Event', eventSchema);

// Routes
app.post('/events/create', async (req, res) => {
  try {
    const { title, description, date, location } = req.body;

    // Validation
    if (!title || !description || !date || !location) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newEvent = new Event({
      title,
      description,
      date: new Date(date),
      location,
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully.', event: newEvent });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
const registrationsRoutes = require('./routes/registrations');
app.use('/registrations', registrationsRoutes);


// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
