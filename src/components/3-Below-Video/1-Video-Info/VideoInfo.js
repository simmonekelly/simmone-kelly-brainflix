import React, { Component} from 'react';
import VideoTitle from './VideoTitle';
import VideoDetails from './VideoDetails';
import VideoDescription from './VideoDescription';
import './video-info.scss';
import axios from 'axios';

export default class VideoInfo extends Component {

    state = {
        title: null,
        description: null,
        channel: null,
        likes: null,
        views: null,
        date: null,
    }

    fetchVideoInfo(id){
        axios.get('https://project-2-api.herokuapp.com/videos/'+ id + '?api_key=' + this.props.apiKey)
        .then(results => {
            const info = results.data;
            this.setState({
                title: info.title,
                description: info.description,
                channel: info.channel,
                likes: info.likes,
                views: info.views,
                date: info.timestamp,
            })
        })
    }

    componentDidMount(){
        this.fetchVideoInfo(this.props.currentVideo)
    }

    componentDidUpdate(prevProps) {
        if(this.props.routerProps.match.params.id) {
            const videoId = this.props.routerProps.match.params.id;
            if (prevProps.currentVideo !== videoId) {
                this.fetchVideoInfo(videoId)
            }
        }else if (prevProps.currentVideo && prevProps.routerProps.match.params.id && !this.props.routerProps.match.params.id){
            console.log('reset to main video')
            this.fetchVideoInfo('84e96018-4022-434e-80bf-000ce4cd12b8')
        }
        
    }
    
    render() {
        
        return (
            <div className="video-info">
                <h1 className="video-info_title">
                    {this.state.title}
                </h1>
                {/* <VideoTitle title={this.state.title} /> */}
                <VideoDetails
                    channel={this.state.channel}
                    likes={this.state.likes}
                    views={this.state.views}
                    date={this.state.date} />
                <p className="video-info_description">
                    {this.state.description}
                </p>
                {/* <VideoDescription description={this.state.description} /> */}
            </div>
        )
    }
}