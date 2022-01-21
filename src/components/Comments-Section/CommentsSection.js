import React from 'react'
import PostedComments from './PostedComments'
import VideoData from '../../data/video-details.json';
import './comment-section.scss'
import CommentsForm from './CommentsForm';
import avatar from '../../assets/images/Mohan-muruge.jpg';

function CommentsSection() {

    const dataJsx = VideoData[0].comments.map((element, index) => {
        return <PostedComments mainVideo={element} key={'comments' + index} />;
    })
    console.log(dataJsx)

    return (
        <section className="comments">
            <h3 className="comment-total">
                {VideoData[0].comments.length} Comments
            </h3>
            <CommentsForm formAvatar={avatar}/>
            {dataJsx}
        </section>
    )
}

export default CommentsSection
