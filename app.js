const express = require('express')
const app = express()
const port = 4000
const Routes = require('./src/index')
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const morgan = require("morgan");

// Middleware to parse JSON
app.use(express.json());
app.use(morgan("dev"));
const allowedOrigins = [
    'http://localhost:3000',
    'http://sbt-production.up.railway.app',
    'https://sbt-production.up.railway.app'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => { console.log("Database Connected"); })
    .catch(() => { console.log("error connecting database"); })



app.use('/api', Routes)

app.listen(port, () => {
    console.log(`server is listening at ${port}`);
})
// d892DgzHlxATDPCh 