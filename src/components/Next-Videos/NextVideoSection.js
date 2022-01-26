import React from 'react';
import NextVideos from './NextVideos';
import './next-videos.scss';

function NextVideoSection(props) {

    const filteredVideoList = props.nextVideosList.filter(element => element.id != props.currentVideo);

    const videoDataJsx = filteredVideoList.map((element) => {
        return <NextVideos NextVideo ={element} key={element.id} getNewId={props.getNewId} />;
    })

    return (
        <section className="next-videos">
            <h2 className="next-videos_header" >NEXT VIDEOS</h2>
            {videoDataJsx}
        </section>
    )
}

export default NextVideoSection

