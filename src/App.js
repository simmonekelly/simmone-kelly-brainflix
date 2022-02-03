import React, { Component } from 'react'
import './App.scss';
import Header from './components/1-Header/Header';
import VideoData from './data/video-details.json';
import NextVideosData from './data/videos.json';
import Video from './components/2-Video/Video';
import BelowVideoSection from './components/3-Below-Video/BelowVideoSection';

export default class App extends Component {

  state = {
    videoId: VideoData[0].id
  };
  

  getNewId = (id) => {
    this.setState({videoId: id})
  }

  render() {
    const currentVideoIndex = VideoData.findIndex(element => element.id === this.state.videoId);

    return (
      
      <div className="App">
        <Header />
        <Video currentVideo={VideoData[currentVideoIndex]} />
        <BelowVideoSection currentVideo={VideoData[currentVideoIndex]} getNewId={this.getNewId} nextVideosList={NextVideosData} />
        
          {/* <NextVideoSection getNewId={this.getNewId} nextVideosList={NextVideosData} currentVideo={VideoData[currentVideoIndex].id} /> */}
        
      </div>
    )
  }
}

