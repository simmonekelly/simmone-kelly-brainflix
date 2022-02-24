import React from 'react';
import './upload-video-section.scss';
import UploadThumbnail from '../../assets/images/Upload-video-preview.jpg';
import PublishIcon from '../../assets/images/icons/publish.svg';
import { Input } from 'postcss';

function VideoUploadPage() {
    return (
        <div className="uploadvideo-seciton">
            <h1 className="uploadvideo-title">Upload Video</h1>
            <h2 className="uploadvideo-subtitle">Video Thumbnail</h2>
            <div className="uploadvideo-form_container">
            <img src={UploadThumbnail} className="uploadvideo-form_thumbnail"/>
            <form className="uploadvideo-form">
                <div className="uploadvideo-form_field">
                    <label form="video-title"><h2>Title Your Video</h2></label>
                    <input type="text" name="video-title" id="video-title" placeholder="Add a title to your video"></input>
                </div>
                <div className="uploadvideo-form_field">
                    <label form="video-description"><h2>Add a Video Desctiption</h2></label>
                    <textarea name="video-description" id="video-description" placeholder="Add a description to your video"></textarea>
                </div>
                <button type="submit" className="uploadvideo-form_button">
                    <img src={PublishIcon} alt="uploadvideo-icon" />
                    <p>Publish</p>
                </button>
            </form>
        </div>
        </div>
    )
}

export default VideoUploadPage

//After form submission, it should notify
//about “upload” and redirect to a home page
//with the default video selected.