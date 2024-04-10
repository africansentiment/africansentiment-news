const express = require('express');
const mongoose = require('mongoose');
const articleRoutes = require('./routes/articles'); // Import the articles routes
const publisherRoutes = require('./routes/publishers'); // Assuming you have a publishers route file

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Initialize Express
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Use the articles routes for requests to /articles
app.use('/articles', articleRoutes);

// Assuming you have publisher routes set up similarly to article routes
app.use('/publishers', publisherRoutes);

// Basic route for home
app.get('/', (req, res) => res.send('AfricanSentiment News API is running.'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
