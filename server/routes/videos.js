const express = require('express');
const fs = require('fs');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

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

router.get('/:id', (req, res) => {
    let id = req.params.id;

    fs.readFile('./data/video-details.json', 'utf8', (err, data) => {
        if(err) throw err;
        const videoData = JSON.parse(data);
        let videoIndex = videoData.findIndex(video => video.id === id);
        res.json(videoData[videoIndex])
    })

})

router.post('/:id/comments', (req, res) => {
    let id = req.params.id;
    const { comment } = req.body;
    console.log('recieved form request');
    // const electricPokemon = JSON.stringify(response.data.pokemon)
    // fs.writeFile('electric-pokemon.json', electricPokemon, (err) => {
    //     if(err) throw err;
    //     console.log('data has been saved')
    // });

    // const newComment = JSON.stringify(comment);

    // fs.writeFile('./data/video-details.json', newComment, (err) => {
    //     if(err) throw err;

    // })


    fs.readFile('./data/video-details.json', 'utf-8', (err, data) => {
        if(err) throw err;
        const videoData = JSON.parse(data);
        let videoIndex = videoData.findIndex(video => video.id === id);
        videoData[videoIndex].comments.push({
            name: 'placeholder name' ,
            comment: comment ,
            likes: 0,
            timestamps: Date.now(),
       })
        console.log(videoData[videoIndex].comments);
        res.json(videoData[videoIndex])
    })
})

router.post('/', (req, res) => {
    //let id = req.params.id;
    const { title, description } = req.body;
    console.log('recieved new video submisison');
    console.log(title)
    console.log(description)
    
    fs.readFile('./data/video-details.json', 'utf-8', (err, data) => {
        if(err) throw err;
        const videoData = JSON.parse(data);
        //console.log(videoData)
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
            comments: [{}],
            id: uuidv4(),
        })
         //console.log(videoData);
        res.json(videoData)
    })
})

module.exports = router;