require('dotenv').config(); // Load environment variables
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose'); // ⬅️ Use Mongoose instead of Sequelize

const projectRoutes = require('./Routes/ProjectRoutes');
const adminRoutes = require('./Routes/AdminRoutes');
const resumeRoutes = require('./Routes/ResumeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; // Make sure this is in your .env

// Middlewares
app.use(express.json());
app.use(cors());

  
// Test route
app.get('/api', (req, res) => {
  res.send('API is running...');
});

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api', adminRoutes);
app.use('/api/resume', resumeRoutes);

  
// Connect to MongoDB
mongoose.connect(MONGO_URI)
.then(() => {
  console.log('MongoDB connected');
  // Start server only after DB is connected
  app.listen(PORT, () => console.log(`App is listening on port ${PORT}...`));
})
.catch((err) => {
  console.error('MongoDB connection error:', err.message);
});
