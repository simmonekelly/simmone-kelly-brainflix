import React from 'react';
import CommentIcon from '../../../assets/images/icons/add_comment.svg';

function CommentsForm(props) {
    
    return (
        <div className="comments-form_container">
            <img src={props.formAvatar} className="comments-form_avatar"/>
            <form className="comments-form">
                <div className="comments-form_field">
                    <label form="name"><h2>JOIN THE CONVERSATION</h2></label>
                    <textarea name="comment" id="comment" placeholder="Add a new comment"></textarea>
                </div>
                <button type="submit" className="comments-form_button">
                    <img src={CommentIcon} alt="comment-icon" />
                    <p>COMMENT</p>
                </button>
            </form>
        </div>
    )
}

export default CommentsForm
