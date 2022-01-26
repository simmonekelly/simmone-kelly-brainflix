import React from 'react';

function NextVideos(props) {
    
    return (

        <div className="next-videos_container" onClick={ () => props.getNewId(props.NextVideo.id)}>
            <div className="next-videos_image-container">
                <img src={props.NextVideo.image} className="next-videos_image"/>
            </div>
            <div className="next-videos_text-contianer">
                <h3 className="next-videos_header">{props.NextVideo.title}</h3>
                <p>{props.NextVideo.channel}</p>
            </div>
        </div>
    )
}

export default NextVideos
