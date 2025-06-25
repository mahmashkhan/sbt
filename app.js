const express = require('express');
const app = express();
const port = 4000;
const Routes = require('./src/index');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();



app.use(cors({
    origin: '*',       // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
}));
// Middleware
app.use(express.json());
app.use(morgan('dev'));


// DB Connection
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
    console.log(`Server is listening at sbt-production.up.railway.app `);
});
