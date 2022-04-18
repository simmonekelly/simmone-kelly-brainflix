import React, { Component } from 'react';
import Video from '../2-Video/Video';
import BelowVideoSection from '../3-Below-Video/BelowVideoSection';
import axios from 'axios';
let apiKey = '2c4911e9-9ba1-4e47-9dc6-1054b805d4c7'


export default class HomePage extends Component {

    state = {
        VideoData: [],
        videoId: null,
        videoInfo: {
            comments: []
        },
        newComment: "",
    };

    //sets initial state
    componentDidMount() {
        this.fetchVideoList();
    }

    // gets full video list
    fetchVideoList() {
        axios.get('http://localhost:8080/videos?api_key=' + apiKey)
        .then(results => {
            let videoData = results.data;
            this.setState({
                VideoData: videoData,
                videoId: videoData[0].id,
            })
        })
        .catch(error => {
            console.log(error)
        });
    }
  
    // onclick event listener to get clicked element id
    getNewId = (id) => {
        this.setState({videoId: id});
    }

    // calls to get video info from axios
    fetchVideoInfo(id) {
        axios.get('http://localhost:8080/videos/' + id + '?api_key=' + apiKey)
        .then(results => {
            const videoInfo = results.data;
            this.setState({
                videoInfo: videoInfo,
            })
        })
        .catch(error => {
            console.log(error)
        });
    }

    componentDidUpdate(prevProps, prevState) {
        
        //checks if current state matches previous state to fetch video info
        if ((this.state.videoId !== prevState.videoId) || (this.state.videoInfo.comments.length !== prevState.videoInfo.comments.length)) {
            
            this.fetchVideoInfo(this.state.videoId);
        }
        
        //checks to see if id is available
        if(this.props.match.params.id) {
            const videoId = this.props.match.params.id;
            
            //checks to see if id param matches previous state id to then set state
            if (prevState.videoId !== videoId) {
                this.setState({videoId: videoId})
            }
        } else if (!this.props.match.params.id && prevProps.match.params.id){
            this.setState({
                videoId: this.state.VideoData[0].id,
            })
        }
        
    }

    //manages comment state change
    handleCommentInputChange = (text) => {
        this.setState({
            newComment: text,
        })
    }

    //comment form submisison
    addComment = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8080/videos/' + this.state.videoId + '/comments?api_key=' + apiKey, {
            comment: this.state.newComment,
          })
        .then(data => {
          this.setState({
            videoInfo: data.data,
            newComment: "",
          })
        });
    };

    deleteComment = (commentId, videoId) => {

        axios.delete('http://localhost:8080/videos/' + videoId + '/comments/' + commentId + '?api_key=' + apiKey)
        .then(data => {
            this.setState({
                videoInfo: data.data,
            })
        });
    };


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
                videoInfo={this.state.videoInfo}
                commentHandler={this.addComment}
                commentValue={this.state.newComment}
                deleteComment={this.deleteComment}
                handleCommentInputChange={this.handleCommentInputChange} />
        </div>
    )}
}

