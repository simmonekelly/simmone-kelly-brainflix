import React from 'react'

function PostedComments(props) {
    console.log(props)
    return (
        <div className="comment-card">
            <figure className="comment-card_avatar" />
            <div className="comment-card_comment-container">
                <div className="comment-card_comment-header">
                    <h3>{props.mainVideo.name}</h3>
                    <p className="comment-timestamp">{props.mainVideo.timestamp}</p>
                </div>
                <p>{props.mainVideo.comment}</p>
            </div>
        </div>
    )
}

export default PostedComments
