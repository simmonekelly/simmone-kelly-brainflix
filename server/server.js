const express = require('express');
const app = express();
const fs = require('fs');
const videoRoutes = require('./routes/videos');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

// require('dotenv').config();
// const { PORT, BACKEND_URL } = process.env;

app.use(cors());

app.get('/register', (req, res) => {
    res.json(uuidv4());
    console.log(req.query)
})

//checking for authentication
app.use((req, res, next) => {
    if ((req.method === 'GET') && (req.query.api_key === '')){
        console.log(req.query.api_key)
        res.status(404).send("No video with that id exists")
    } else {
        next();
    }
})

// app.get('/',(req, res) => {
//     console.log('get request ran')
//     fs.readFile('./data/video-details.json', 'utf8', (err,data) => {
//         if (err) throw err;
//         const parsedData = JSON.parse(data)
//         console.log(parsedData)
//         res.json(parsedData)
//     })
// })

app.use('/videos', videoRoutes);

app.listen(8080, () => {
    console.log('Listening to port 8080')
})

