import React from 'react'

function CommentsForm(props) {
    console.log(props)
    return (
        <div className="comments-form">
            <img src={props.formAvatar} className="form-avatar"/>
            <form>
                <div className="form-field">
                    <label form="name"><h2>JOIN THE CONVERSATION</h2></label>
                    <textarea name="comment" id="comment" placeholder="Add a new comment"></textarea>
                </div>
                <button type="submit" className="header-button">COMMENT</button>
            </form>
        </div>
    )
}

export default CommentsForm
