import React, { Component } from 'react';
import VideoData from '../../data/video-details.json';
import NextVideosData from '../../data/videos.json';
import Video from '../2-Video/Video';
import BelowVideoSection from '../3-Below-Video/BelowVideoSection';


export default class HomePage extends Component {

    state = {
        videoId: VideoData[0].id
    };
       
    getNewId = (id) => {
        this.setState({videoId: id})
    }

    render () {

    const currentVideoIndex = VideoData.findIndex(element => element.id === this.state.videoId);
    console.log(this.props)
    //console.log(this.props.match.path)

    return (
        <div>
            <Video currentVideo={VideoData[currentVideoIndex]} />
            <BelowVideoSection
                currentVideo={VideoData[currentVideoIndex]}
                getNewId={this.getNewId}
                nextVideosList={NextVideosData}
                routerProps={this.props} />
        </div>
    )
}
}

