import React, { Component } from 'react'
import './App.scss';
import Header from './components/Header/Header';
import VideoSection from './components/Video-Section/VideoSection';
import CommentsSection from './components/Comments-Section/CommentsSection';
import NextVideoSection from './components/Next-Videos/NextVideoSection';
import VideoData from './data/video-details.json';
import NextVideosData from './data/videos.json';
import DesktopVideo from './components/Desktop-Video/DesktopVideo';

export default class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {videoId: VideoData[0].id}
  // }

  state = {
    videoId: VideoData[0].id
  };

  getNewId = (id) => {
    const newVideoIndex = VideoData.findIndex(element => element.id === id);
    this.setState({
     videoId: VideoData[newVideoIndex].id
    })
  }

  render() {
    console.log(VideoData);
    const currentVideoIndex = VideoData.findIndex(element => element.id === this.state.videoId);
    console.log(currentVideoIndex)

    return (
      <div className="App">
        <Header />
        <DesktopVideo currentVideo={VideoData[currentVideoIndex]} />
        <div className="desktop-container">
          <div className="desktop-videodetails-container">
            <VideoSection currentVideo={VideoData[currentVideoIndex]} />
            <CommentsSection currentVideoComments={VideoData[currentVideoIndex].comments} />
          </div>
          <NextVideoSection getNewId={this.getNewId} nextVideosList={NextVideosData} currentVideo={VideoData[currentVideoIndex].id} />
        </div>
      </div>
    )
  }
}