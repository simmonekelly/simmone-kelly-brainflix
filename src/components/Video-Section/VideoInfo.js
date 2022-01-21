import React from 'react'
import VideoTitle from './VideoTitle';
import VideoDetails from './VideoDetails';
import VideoDescription from './VideoDescription';
import VideoData from '../../data/video-details.json';

console.log(VideoData)

function VideoInfo() {
    return (
        <div>
            <VideoTitle mainVideo={VideoData[0]} />
            <VideoDetails mainVideo={VideoData[0]} />
            <VideoDescription mainVideo={VideoData[0]} />
        </div>
    )
}

export default VideoInfo