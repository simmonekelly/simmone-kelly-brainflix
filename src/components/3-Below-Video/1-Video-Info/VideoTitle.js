import React from 'react';

function VideoTitle(props) {
    return (
        <h1 className="video-info_title">
            {props.titleData}
        </h1>
    )
}

export default VideoTitle
