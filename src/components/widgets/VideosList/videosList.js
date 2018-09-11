import React, { Component } from 'react';
import style from './videosList.css';
import axios from 'axios';
import {API_URL_VIDEOS, VIDEOS_BASE_PATH, API_URL_TEAMS} from '../../../config';
import Button from '../../widgets/Buttons/buttons';
import VideosListTemplate from './videosListTemplate';

class VideosList extends Component {

    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        amount: this.props.amount,
        end: this.props.start+this.props.amount
    }

    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }

    renderTitle = (title) => {
        return title ?
        <h3><strong>NBA</strong> Videos</h3>
        :
        null
    }

    renderVideos = () => {
        let template = null;
        switch (this.props.type) {
            case 'card':
            template = <VideosListTemplate data={this.state.videos} teams={this.state.teams}/>
            break;
            default:
            template = null;
        }
        return template;
    }

    loadMore = () => {
        let end = this.state.end+this.state.amount;
        this.request(this.state.end, end);
    }

    request = (start, end) => {
        if(this.state.teams.length < 1) {
            axios.get(`${API_URL_TEAMS}`)
            .then(response=>response.data)
            .then(data => {
                this.setState({
                    teams: data
                });
            })
        }

        axios.get(`${API_URL_VIDEOS}?_start=${start}&_end=${end}`)
        .then(response=>response.data)
        .then(data => {
            this.setState({
                videos: [...this.state.videos, ...data],
                start,
                end
            })
        })
    }

    renderButton = (loadmore) => {
        return loadmore ?
        <Button
            type="loadmore"
            callToAction="Load more videos"
            loadMore={()=>this.loadMore()}
            />
        :
        <Button
            type="linkTo"
            callToAction="More videos"
            linkTo={VIDEOS_BASE_PATH+'/'}
            />

    }

    render() {
        return (
            <div className={style.videosList_wrapper}>
                {this.renderTitle(this.props.title)}
                {this.renderVideos()}
                {this.renderButton(this.props.loadmore)}
            </div>
        );
    }

}

export default VideosList;
