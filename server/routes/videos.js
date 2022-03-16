const express = require('express');
const fs = require('fs');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

//reads all data and only responds with specific key/values
router.get('/', (_,res) => {
    fs.readFile('./data/video-details.json', 'utf8', (err, data) => {
        if(err) throw err;
        const videoData = JSON.parse(data);
        let newArray = [];
        
        videoData.forEach(video => {
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

//reads data file, finds specific video data and gives as a response
router.get('/:id', (req, res) => {
    let id = req.params.id;

    fs.readFile('./data/video-details.json', 'utf8', (err, data) => {
        if(err) throw err;
        const videoData = JSON.parse(data);
        let videoIndex = videoData.findIndex(video => video.id === id);
        res.json(videoData[videoIndex])
    })

})

//takes in new comment, adds it to file and overrites full data file
router.post('/:id/comments', (req, res) => {
    let id = req.params.id;
    const { comment } = req.body;
    console.log('recieved form request');

    fs.readFile('./data/video-details.json', 'utf-8', (err, data) => {
        if(err) throw err;
        const videoData = JSON.parse(data);
        let videoIndex = videoData.findIndex(video => video.id === id);
        videoData[videoIndex].comments.push({
            name: 'placeholder name' ,
            comment: comment ,
            likes: 0,
            id: uuidv4(),
            timestamp: Date.now(),
       })

       const addComments = JSON.stringify(videoData)
        fs.writeFile('./data/video-details.json', addComments, (err) => {
            if(err) throw err;
            console.log('data has been saved')
        });

        res.json(videoData[videoIndex])
    })
})

//for deleting comments
router.delete('/:videoId/comments/:commentId', (req, res) => {

    const { videoId, commentId } = req.params;

    fs.readFile('./data/video-details.json', 'utf-8', (err, data) => {
        if(err) throw err;
        const videoData = JSON.parse(data);

       const foundVideo = videoData.find((video) => video.id === videoId);

        const deletedComment = foundVideo.comments.findIndex((comment) => comment.id === commentId);
        
        foundVideo.comments.splice(deletedComment, 1)

        const newVideoData = JSON.stringify(videoData)

        fs.writeFile('./data/video-details.json', newVideoData, (err) => {
            if(err) throw err;
            console.log('data has been saved')
        });

        res.json(videoData)
    })
})

//takes in video upload and adds to full video list
router.post('/', (req, res) => {
    
    const { title, description } = req.body;
    console.log('recieved new video submisison');
    
    fs.readFile('./data/video-details.json', 'utf-8', (err, data) => {
        if(err) throw err;
        const videoData = JSON.parse(data);
        
        videoData.push({
            title: title,
            channel:"channel placeholder",
            image: "",
            description: description,
            views: 0,
            likes: 0,
            duration: 0,
            video: "url",
            timestamp: Date.now(),
            comments: [],
        })

        const newVideoData = JSON.stringify(videoData)

        fs.writeFile('./data/video-details.json', newVideoData, (err) => {
            if(err) throw err;
            console.log('data has been saved')
        });

        res.json(videoData)
    })



})

module.exports = router;