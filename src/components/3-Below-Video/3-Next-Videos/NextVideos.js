import React from 'react';
import {Link} from 'react-router-dom';

function NextVideos(props) {

    return (
        <Link className="next-videos_link" to={"/" + props.NextVideo.id}>
        <div className="next-videos_container" onClick={ () => props.getNewId(props.NextVideo.id)}>
            <div className="next-videos_image-container">
                <img src={props.NextVideo.image} className="next-videos_image"/>
            </div>
            <div className="next-videos_text-contianer">
                <h3>{props.NextVideo.title}</h3>
                <p>{props.NextVideo.channel}</p>
            </div>
        </div>
        </Link>
    )
}

export default NextVideos
