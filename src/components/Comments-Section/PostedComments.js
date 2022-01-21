import React from 'react'

function PostedComments(props) {
    console.log(props)
    return (
        <div className="comment-card_container">
            <div className="comment-card_header">
                <p>{props.mainVideo.name}</p>
                <p>{props.mainVideo.timestamp}</p>
            </div>
            <p>{props.mainVideo.comment}</p>
        </div>
    )
}

export default PostedComments
