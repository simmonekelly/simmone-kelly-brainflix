import React from 'react';
import Video from './Video';
import VideoInfo from './VideoInfo';
import './video-section.scss';
import VideoData from '../../data/video-details.json';

function VideoSection() {
    return (
        <section className="video">
            <Video mainVideo={VideoData[0]}/>
            <VideoInfo mainVideo={VideoData[0]}/>
        </section>
    )
}

export default VideoSection