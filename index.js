const express = require('express');
const path = require('path'); // To work with file paths
const helmet = require('helmet'); // Security middleware
const compression = require('compression'); // Compression middleware
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(express.json());
app.use(helmet()); // Helmet middleware for security
app.use(compression()); // Compression middleware

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/v1/blogs', blogRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
