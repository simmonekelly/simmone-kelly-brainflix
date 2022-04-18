import React from 'react';
import NextVideos from './NextVideos';
import './next-videos.scss';

function NextVideoSection(props) {
    const { currentVideo, getNewId, videosList, routerProps } = props;
    //console.log(props)
    
    const filteredVideoList = videosList.filter(element => element.id != currentVideo);

    const videoDataJsx = filteredVideoList.map((element) => {
        return <NextVideos
                    NextVideo ={element}
                    key={element.id}
                    getNewId={getNewId}
                    routerProps={routerProps} />;
    })

    return (
        <section className="next-videos">
            <h2 className="next-videos_header" >NEXT VIDEOS</h2>
            {videoDataJsx}
        </section>
    )
}

export default NextVideoSection

