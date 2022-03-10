const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req,res) => {
    fs.readFile('./data/video-details.json', 'utf8', (err, data) => {
        if(err) throw err;
        const videoData = JSON.parse(data);
        let newArray = [];
        
        videoData.forEach(video => {
            console.log(video.id)
            newArray.push({
                id: video.id,
                title: video.title,
                channel: video.channel,
                image: video.image,
            });
        });
        res.json(newArray)
    })
})

router.get('/:id', (req, res) => {
    //console.log(req.params.id);
    let id = req.params.id;

    fs.readFile('./data/video-details.json', 'utf8', (err, data) => {
        if(err) throw err;
        const videoData = JSON.parse(data);
        let videoIndex = videoData.findIndex(video => video.id === id);
        console.log(videoData[videoIndex]);
        res.json(videoData[videoIndex])
    })

})

module.exports = router;