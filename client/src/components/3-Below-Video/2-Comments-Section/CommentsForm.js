import React from 'react';
import CommentIcon from '../../../assets/images/icons/add_comment.svg';

function CommentsForm(props) {
    
    return (
        <div className="comments-form_container">
            <img src={"http://localhost:8080/images/Mohan-muruge.jpg"} className="comments-form_avatar"/>
            <form className="comments-form" id="commentsform">
                <div className="comments-form_field">
                    <label form="name"><h2>JOIN THE CONVERSATION</h2></label>
                    <textarea name="comment" id="comment" placeholder="Add a new comment" value={props.commentValue} onChange = {(e) => props.handleCommentInputChange(e.target.value)}></textarea>
                </div>
                <button
                    type="submit"
                    className="comments-form_button"
                    onClick = {(event) => props.commentHandler(event) }>
                    <img src={"http://localhost:8080/images/icons/add_comment.svg"} alt="comment-icon" />
                    <p>COMMENT</p>
                </button>
            </form>
        </div>
    )
}

export default CommentsForm
