import React, { Component } from 'react';
import PostedComments from './PostedComments';
import './comment-section.scss';
import CommentsForm from './CommentsForm';
import avatar from '../../../assets/images/Mohan-muruge.jpg';
import axios from 'axios';

export default class CommentsSection extends Component {
    state = {
        videoComments: []
    }

    fetchVideoComments(id) {
        axios.get('https://project-2-api.herokuapp.com/videos/' + id + '?api_key=' + this.props.apiKey)
        .then(results => {
            this.setState({
                videoComments: results.data.comments
            })
        })
    }

    componentDidMount() {
        this.fetchVideoComments(this.props.currentVideo)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('comments did update');
        console.log(prevProps)
        console.log('previous video: ' + prevProps.currentVideo)
        console.log('previous router: ' + prevProps.routerProps.match.params.id)
        console.log('current id: ' + this.props.routerProps.match.params.id)
        //console.log(prevState)
        //console.log('currentvideo prop: ' + this.props.currentVideo)
        //console.log('currentmatch prop: ' + this.props.routerProps.match.params.id)
        //console.log('prevProp: ' + prevProps.currentVideo);
        if(this.props.routerProps.match.params.id) {
            const videoId = this.props.routerProps.match.params.id;
            console.log('about to check ids');
            if (prevProps.currentVideo !== videoId) {
                this.fetchVideoComments(videoId);
            }
        
        }else if (prevProps.currentVideo && prevProps.routerProps.match.params.id && !this.props.routerProps.match.params.id){
            console.log('reset to main video')
            this.fetchVideoComments('84e96018-4022-434e-80bf-000ce4cd12b8')
        }
    }

    render(){
        return(
            <section className="comments">
                <h3 className="comment-total">
                    {this.state.videoComments.length} Comments
                </h3>
                <CommentsForm formAvatar={avatar}/>
                {this.state.videoComments.map((element, index) =>
                    <PostedComments videoComments={element} key={'comments' + index} />)}
            </section>
        )

    }
}