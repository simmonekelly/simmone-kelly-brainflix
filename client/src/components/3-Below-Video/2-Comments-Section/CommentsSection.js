import React from 'react';
import PostedComments from './PostedComments';
import './comment-section.scss';
import CommentsForm from './CommentsForm';
import avatar from '../../../assets/images/Mohan-muruge.jpg';

 
function CommentsSection(props){
    const {videoInfo} = props;

    if (videoInfo.length === 0) {
        return null
    }

    return(
        <section className="comments">
            <h3 className="comment-total">
                {videoInfo.comments.length} Comments
            </h3>
            <CommentsForm formAvatar={avatar}/>
            {videoInfo.comments.map((element, index) =>
                <PostedComments videoComments={element} key={'comments' + index} />)}
        </section>
    )
}
export default CommentsSection