import React from 'react'

function PostedComments(props) {
    
    return (
        <div className="comment-card">
            <figure className="comment-card_avatar" />
            <div className="comment-card_comment-container">
                <div className="comment-card_comment-header">
                    <h3>{props.currentVideoComments.name}</h3>
                    <p className="comment-timestamp">
                        {new Intl.DateTimeFormat("en-US", {
                            month: "2-digit",
                            day: "2-digit",
                            year: "numeric"
                        }).format(props.currentVideoComments.timestamp)}</p>
                </div>
                <p>{props.currentVideoComments.comment}</p>
            </div>
        </div>
    )
}

export default PostedComments
