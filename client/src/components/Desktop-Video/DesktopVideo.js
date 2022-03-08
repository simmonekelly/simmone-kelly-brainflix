import React from 'react'
import './desktop-video.scss'

function DesktopVideo(props) {
    return (
        <section className="desktop-video">
            <video className="desktop-video_video" poster={props.currentVideo.image} controls="play" />

        </section>
    )
}

export default DesktopVideo


{/* <section className="desktop-video">
            <img src={props.currentVideo.image} className="desktop-video_image" />
        </section> */}