import React from 'react';
import NextVideoData from '../../data/videos.json';
import NextVideosList from './NextVideosList';
import './next-videos.scss';

console.log(NextVideoData)

function NextVideos() {

    const videoListJsx = NextVideoData.map((elemnt, index) => {
        return <NextVideosList videoList ={elemnt} key={'video' + index} />;
    })

    return (
        <section className="next-videos">
            <h2>NEXT VIDEOS</h2>
            {videoListJsx}
        </section>
    )
}

export default NextVideos
