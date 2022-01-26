import React from 'react'
import VideoTitle from './VideoTitle';
import VideoDetails from './VideoDetails';
import VideoDescription from './VideoDescription';

function VideoInfo(props) {
    
    return (
        <div className="video-info">
            <VideoTitle titleData={props.currentVideo.title} />
            <VideoDetails detailsData={props.currentVideo} />
            <VideoDescription descriptionData={props.currentVideo.description} />
        </div>
    )
}

export default VideoInfo