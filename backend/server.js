const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/api');
const authMiddleware = require('./middleware/auth');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api', authMiddleware, userRoutes);

// CORS Middleware
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));