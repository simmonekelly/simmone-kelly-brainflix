import React from 'react';
import CommentsSection from './2-Comments-Section/CommentsSection';
import NextVideoSection from './3-Next-Videos/NextVideoSection';
import VideoInfo from './1-Video-Info/VideoInfo';

function BelowVideoSection(props) {
    const { currentVideo, getNewId, videosList, routerProps, apiKey } = props;
    
    return (
        <div className="desktop-container">
            <div className="desktop-videodetails-container">
                <VideoInfo
                    apiKey={apiKey}
                    currentVideo={currentVideo.id}
                    routerProps={routerProps} />
                <CommentsSection
                    apiKey={apiKey}
                    currentVideo={currentVideo.id}
                    routerProps={routerProps} />
            </div>
            <NextVideoSection
                getNewId={getNewId}
                videosList={videosList}
                currentVideo={currentVideo.id}
                routerProps={routerProps} />
        </div>
    )
}

export default BelowVideoSection
