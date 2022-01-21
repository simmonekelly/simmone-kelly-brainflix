import React from 'react'

function VideoDetails(props) {
    console.log(props);
    return (
        <div className="video-info__container padding">
            <div className="video-info_mobile">
                <p>{props.mainVideo.channel}</p>
                <p>{props.mainVideo.timestamp}</p>
            </div>
            <div className="video-info_mobile">
                <p>{props.mainVideo.views}</p>
                <p>{props.mainVideo.likes}</p>
            </div>
        </div>
    )
}

export default VideoDetails
