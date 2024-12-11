const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000; // Use a port other than 5000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/alumni_profiles', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const profileRoutes = require('./routes/profileRoutes');
app.use('/profiles', profileRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
