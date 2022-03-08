import React from 'react';
import {Link} from 'react-router-dom';

function NextVideos(props) {

    const { NextVideo } = props;

    return (
        <Link className="next-videos_link" to={"/" + NextVideo.id}>
        <div className="next-videos_container" onClick={ () => props.getNewId(NextVideo.id)}>
            <div className="next-videos_image-container">
                <img src={NextVideo.image} className="next-videos_image"/>
            </div>
            <div className="next-videos_text-contianer">
                <h3>{NextVideo.title}</h3>
                <p>{NextVideo.channel}</p>
            </div>
        </div>
        </Link>
    )
}

export default NextVideos
