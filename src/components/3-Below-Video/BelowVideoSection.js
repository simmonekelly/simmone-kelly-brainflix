import React from 'react';
import CommentsSection from './2-Comments-Section/CommentsSection';
import NextVideoSection from './3-Next-Videos/NextVideoSection';
import VideoInfo from './1-Video-Info/VideoInfo';

function BelowVideoSection(props) {

    return (
        <div className="desktop-container">
            <div className="desktop-videodetails-container">
                <VideoInfo currentVideo={props.currentVideo} />
                <CommentsSection currentVideoComments={props.currentVideo.comments} />
            </div>
            <NextVideoSection getNewId={props.getNewId} nextVideosList={props.nextVideosList} currentVideo={props.currentVideo.id} />
        </div>
    )
}

export default BelowVideoSection
