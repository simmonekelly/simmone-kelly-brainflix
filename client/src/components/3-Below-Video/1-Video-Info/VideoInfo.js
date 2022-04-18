import React from 'react';
import VideoDetails from './VideoDetails';
import './video-info.scss';

function VideoInfo(props){
    
    const {videoInfo} = props;

    return (
        <div className="video-info">
            <h1 className="video-info_title">
                {videoInfo.title}
            </h1>
            <VideoDetails
                channel={videoInfo.channel}
                likes={videoInfo.likes}
                views={videoInfo.views}
                date={videoInfo.date} 
                />
            <p className="video-info_description">
                {videoInfo.description}
            </p>
        </div>
    )
}
export default VideoInfo