import React, { Component } from "react";
import "./upload-video-section.scss";
import UploadThumbnail from "../../assets/images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/images/icons/publish.svg";
import axios from "axios";
let apiKey = "2c4911e9-9ba1-4e47-9dc6-1054b805d4c7";

export default class VideoUploadPage extends Component {
  //upload form submisison
  addNewVideo = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/videos?api_key=" + apiKey, {
        title: this.form.title.value,
        description: this.form.description.value,
      })
      .then((data) => {
        console.log(data);
      });

    this.form.reset();
  };

  render() {
    return (
      <div className="uploadvideo-seciton">
        <h1 className="uploadvideo-title">Upload Video</h1>
        <h2 className="uploadvideo-subtitle">Video Thumbnail</h2>
        <div className="uploadvideo-form_container">
          <img src={UploadThumbnail} className="uploadvideo-form_thumbnail" />
          <form
            className="uploadvideo-form"
            onSubmit={this.addNewVideo}
            ref={(form) => (this.form = form)}
          >
            <div className="uploadvideo-form_field">
              <label form="title">
                <h2>Title Your Video</h2>
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Add a title to your video"
              ></input>
            </div>
            <div className="uploadvideo-form_field">
              <label form="description">
                <h2>Add a Video Desctiption</h2>
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
            <button type="submit" className="uploadvideo-form_button">
              <img src={PublishIcon} alt="uploadvideo-icon" />
              <p>Publish</p>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
