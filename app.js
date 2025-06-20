const express = require('express');
const app = express();
const port = 4000;
const Routes = require('./src/index');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

const allowedOrigins = [
  'http://localhost:3000', // Development
  'https://sbt-production.up.railway.app', // Production
];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log('🌍 Request Origin:', origin);
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log(`❌ Blocked by CORS: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // Support cookies/auth
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database Connected'))
  .catch(err => console.error('Error connecting to database:', err));

// Routes
app.use('/api', Routes);

// Start server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});