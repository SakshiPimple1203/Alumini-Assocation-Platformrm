const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7000; // Ensure it's not in the excluded list

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect('mongodb://127.0.0.1:27017/successStories', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Connection error:', err));

// Routes
const storiesRouter = require('./routes/stories');
app.use('/api/stories', storiesRouter);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
