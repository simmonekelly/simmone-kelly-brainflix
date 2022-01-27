import React from 'react';

function Video(props) {
    return (
        <section className="video-mainvideo">
            <video poster={props.currentVideo.image} controls="play" />
        </section>
        
        
    )
}

export default Video
