import React from 'react';
import './video.scss';

function Video(props) {
    return (
        <section className="video">
            <video poster={props.currentVideo.image} controls="play" />
        </section>
    )
}

export default Video
