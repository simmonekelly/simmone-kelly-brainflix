const express = require('express');
const app = express();
const fs = require('fs');
const videoRoutes = require('./routes/videos');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

// require('dotenv').config();
// const { PORT, BACKEND_URL } = process.env;

app.use(cors());
app.use(express.json());

app.get('/register', (req, res) => {
    res.json(uuidv4());
})

//checking for authentication
app.use((req, res, next) => {
    if ((req.method === 'GET') && ((req.query.api_key === '') || (Object.keys(req.query).length === 0))){
        res.status(404).json({
            message: "No video with that id exists"
          })
    } else {
        next();
    }
})

//route for videos
app.use('/videos', videoRoutes);

app.listen(8080, () => {
    console.log('Listening to port 8080')
})

