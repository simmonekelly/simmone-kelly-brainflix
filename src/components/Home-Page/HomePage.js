import React, { Component } from 'react';
import Video from '../2-Video/Video';
import BelowVideoSection from '../3-Below-Video/BelowVideoSection';
import axios from 'axios';
let apiKey = '2c4911e9-9ba1-4e47-9dc6-1054b805d4c7'


export default class HomePage extends Component {

    state = {
        VideoData: [],
        videoId: null,
    };

    // gets full video list
    fetchVideoList() {
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=' + apiKey)
        .then(results => {
            let videoData = results.data;
            this.setState({
                VideoData: videoData,
                videoId: videoData[0].id,
            })
            
        });
    }
  
    // onclick event listener to get clicked element id
    getNewId = (id) => {
        this.setState({videoId: id});
    }

    //sets initial state
    componentDidMount() {
        console.log('homepage did mount');
        this.fetchVideoList();
    }

    componentDidUpdate(prevProps, prevState,) {
        console.log('homepage updated');
        console.log(prevState);
        console.log(prevProps)
        console.log('this.props.match.params.id:' + this.props.match.params.id);
        if(this.props.match.params.id) {
            const videoId = this.props.match.params.id;
            console.log('home page id: ' + videoId);
            console.log('about to check ids hp')
            if (prevState.videoId !== videoId) {
                this.setState({videoId: videoId})
            }
        } else if (!this.props.match.params.id && prevProps.match.params.id){
            //current id is not defined and previous id is not defined
            this.setState({
                videoId: '84e96018-4022-434e-80bf-000ce4cd12b8',
            })
        }
        //run a check for undefined match.param and prev state for home page
        
    }

    render () {

    const currentVideoIndex = this.state.VideoData.findIndex(element => element.id === this.state.videoId);

    if (!this.state.videoId) {
        return null
    }

    return (
        <div>
            <Video currentVideo={this.state.VideoData[currentVideoIndex]} />
            <BelowVideoSection
                currentVideo={this.state.VideoData[currentVideoIndex]}
                getNewId={this.getNewId}
                videosList={this.state.VideoData}
                routerProps={this.props} 
                apiKey={apiKey}/>
        </div>
    )
}
}

