import React from 'react';
import viewsIcon from '../../../assets/images/icons/views.svg';
import likesIcon from '../../../assets/images/icons/likes.svg';

function VideoDetails(props) {
   
    const {channel, timestamp, views, likes } = props
    return (
        <div className="video-info_container">
            <div className="video-info_mobile">
                <h3 className="info_top-row">By {channel}</h3>
                <p>{new Intl.DateTimeFormat("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric"
                }).format(timestamp)}</p>
            </div>
            <div className="video-info_mobile">
                <div className="video-info_views-container info_top-row">
                    <img src={viewsIcon}/>
                    <p>{views}</p>
                </div>
                <div className="video-info_likes-container">
                    <img src={likesIcon}/>
                    <p>{likes}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoDetails
