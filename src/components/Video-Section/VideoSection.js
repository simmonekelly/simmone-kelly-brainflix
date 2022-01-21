import React from 'react';
import Video from './Video';
import VideoInfo from './VideoInfo';
import './video-section.scss';

function VideoSection() {
    return (
        <section>
            <Video />
            <VideoInfo />
        </section>
    )
}

export default VideoSection