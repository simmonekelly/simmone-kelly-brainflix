import React from 'react';
import PostedComments from './PostedComments';
import './comment-section.scss';
import CommentsForm from './CommentsForm';
import avatar from '../../../assets/images/Mohan-muruge.jpg';

 
function CommentsSection(props){
    const {videoInfo, currentVideo, commentHandler, handleCommentInputChange, deleteComment} = props;
    //console.log(props)
    if (videoInfo.length === 0) {
        return null
    }

    return(
        <section className="comments">
            <h3 className="comment-total">
                {videoInfo.comments.length} Comments
            </h3>
            <CommentsForm
                formAvatar={avatar}
                currentVideo={currentVideo}
                commentHandler={commentHandler}
                handleCommentInputChange={handleCommentInputChange} />
            {videoInfo.comments.map((element, index) =>
                <PostedComments
                    videoComments={element}
                    key={'comments' + index}
                    currentVideo={currentVideo}
                    deleteComment={deleteComment}
                    id={index} />)}
        </section>
    )
}
export default CommentsSection