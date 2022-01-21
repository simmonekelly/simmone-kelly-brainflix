import React from 'react';

function VideoTitle(props) {
    console.log(props);
    return (
        <h1 className="padding">
            {props.mainVideo.title}
        </h1>
    )
}

export default VideoTitle
