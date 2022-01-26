import React from 'react';
import PostedComments from './PostedComments';
import './comment-section.scss';
import CommentsForm from './CommentsForm';
import avatar from '../../assets/images/Mohan-muruge.jpg';

function CommentsSection(props) {

    return (
        <section className="comments">
            <h3 className="comment-total">
                {props.currentVideoComments.length} Comments
            </h3>
            <CommentsForm formAvatar={avatar}/>
            {props.currentVideoComments.map((element, index) =>
                <PostedComments currentVideoComments={element} key={'comments' + index} />)}
        </section>
    )
}

export default CommentsSection

//         const videoDataJsx = VideoData[currentVideoIndex].comments.map((element, index) => {
//             return <PostedComments currentVideo={element} key={'comments' + index} />;
//         })
