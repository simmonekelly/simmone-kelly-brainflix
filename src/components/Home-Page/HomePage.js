import React, { Component } from 'react';
import Video from '../2-Video/Video';
import BelowVideoSection from '../3-Below-Video/BelowVideoSection';
import axios from 'axios';
let apiKey = '2c4911e9-9ba1-4e47-9dc6-1054b805d4c7'


export default class HomePage extends Component {

    state = {
        VideoData: [],
        videoId: null,
        videoComments:[],
    };

    fetchVideoList() {
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=' + apiKey)
        .then(results => {
            let videoData = results.data;
            this.fetchVideoComments(videoData[0].id);
            this.setState({
                VideoData: videoData,
                videoId: videoData[0].id

            })
            
        });
    }

    fetchVideoComments(id) {
        console.log(id)
        axios.get('https://project-2-api.herokuapp.com/videos/' + id + '?api_key=' + apiKey)
        .then(results => {
            this.setState({
                videoComments: results.data.comments
            })
        })
    }
       
    getNewId = (id) => {
        this.setState({videoId: id});
        this.fetchVideoComments(id)
    }

    componentDidMount() {
        console.log('component did mount');
        this.fetchVideoList();
    }

    componentDidUpdate(prevProps, prevState,) {
        console.log('homepage updated')
        //console.log(prevProps)
        //console.log(prevState)
        //console.log(this.state)
        //console.log('this.props.match.params.id:' + this.props.match.params.id)
        if (this.props.match.params.id === this.state.videoId) {
            console.log('id matches')
        }
        
    }

//updating for on click
//need to update for when clicking on the home screen
//pass id to fetch comments function
//fetch video list for next video section
//remove id from next video sectin

    render () {

    const currentVideoIndex = this.state.VideoData.findIndex(element => element.id === this.state.videoId);
    console.log('rendering');
    console.log(this.state.VideoData);

    if (!this.state.videoId) {
        return null
    }

    return (
        <div>
            <Video currentVideo={this.state.VideoData[currentVideoIndex]} />
            <BelowVideoSection
                currentVideo={this.state.VideoData[currentVideoIndex]}
                videoComments={this.state.videoComments}
                getNewId={this.getNewId}
                videosList={this.state.VideoData}
                routerProps={this.props} />
        </div>
    )
}
}

