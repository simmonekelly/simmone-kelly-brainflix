import React from 'react';

function NextVideosList(props) {
    return (
        <div className="next-videos_container">
            <img src={props.videoList.image} className="next-videos_image"/>
            <div className="next-videos_text-contianer">
                <h3 className="next-videos_header">{props.videoList.title}</h3>
                <p>{props.videoList.channel}</p>
            </div>
        </div>
    )
}

export default NextVideosList
