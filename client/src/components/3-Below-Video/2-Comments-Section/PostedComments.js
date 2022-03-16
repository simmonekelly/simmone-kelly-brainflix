import React from 'react'
import deleteicon from '../../../assets/images/icons/delete.svg'

function PostedComments(props) {
    //console.log(props)
    const {videoComments, currentVideo, deleteComment, id} = props;
    //console.log(id)
    
    return (
        <div className="comment-card">
            <figure className="comment-card_avatar" />
            <div className="comment-card_comment-container">
                <div className="comment-card_comment-header">
                    <h3>{videoComments.name}</h3>
                    <p className="comment-timestamp">
                        {new Intl.DateTimeFormat("en-US", {
                            month: "2-digit",
                            day: "2-digit",
                            year: "numeric"
                        }).format(videoComments.timestamp)}</p>
                </div>
                <p>{videoComments.comment}</p>
                <img
                    className="delete-icon"
                    src={deleteicon}
                    onClick={ () => deleteComment(id, currentVideo) } />
            </div>
        </div>
    )
}

export default PostedComments