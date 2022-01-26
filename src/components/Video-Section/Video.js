import React from 'react';

function Video(props) {
    return (
        <img src={props.currentVideo.image} className="video-image" />
    )
}

export default Video
