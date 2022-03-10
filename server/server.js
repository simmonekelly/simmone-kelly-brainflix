const express = require('express');
const app = express();
const fs = require('fs');
const videoRoutes = require('./routes/videos');
const cors = require('cors');

app.use(cors());

app.get('/',(req, res) => {
    console.log('get request ran')
    fs.readFile('./data/video-details.json', 'utf8', (err,data) => {
        if (err) throw err;
        const parsedData = JSON.parse(data)
        console.log(parsedData)
        res.json(parsedData)
    })
})

app.use('/videos', videoRoutes);

app.listen(8080, () => {
    console.log('Listening to port 8080')
})

