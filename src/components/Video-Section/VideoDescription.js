import React from 'react'

function VideoDescription(props) {
    console.log(props);
    return (
        <p className="padding">
            {props.mainVideo.description}
        </p>
    )
}

export default VideoDescription
