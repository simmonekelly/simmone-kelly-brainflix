import React from 'react'
import PostedComments from './PostedComments'
import VideoData from '../../data/video-details.json';

function CommentsSection() {

    const dataJsx = VideoData[0].comments.map((element, index) => {
        return <PostedComments mainVideo={element} key={'comments' + index} />;
    })
    console.log(dataJsx)

    return (
        <section>
            <p>
                Number of Comments
            </p>
            <p>
                Comments Form
            </p>
            {dataJsx}
        </section>
    )
}

export default CommentsSection
