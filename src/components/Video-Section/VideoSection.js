import React from 'react';
import Video from './Video';
import VideoInfo from './VideoInfo';
import './video-section.scss';

function VideoSection(props) {
    
    return (
        <section className="video">
            <Video currentVideo={props.currentVideo}/>
            <VideoInfo currentVideo={props.currentVideo}/>
        </section>
    )
}

export default VideoSection
