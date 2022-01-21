import React from 'react'
import VideoTitle from './VideoTitle';
import VideoDetails from './VideoDetails';
import VideoDescription from './VideoDescription';

function VideoInfo(props) {
    console.log(props)
    return (
        <div className="video-info">
            <VideoTitle titleData={props.mainVideo.title} />
            <VideoDetails detailsData={props.mainVideo} />
            <VideoDescription descriptionData={props.mainVideo.description} />
        </div>
    )
}

export default VideoInfo