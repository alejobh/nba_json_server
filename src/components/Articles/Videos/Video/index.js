import React, { Component } from 'react';
import axios from 'axios';
import {API_URL_VIDEOS, API_URL_TEAMS} from '../../../../config';
import style from '../../articles.css';
import Header from './header';
import VideosRelated from '../../../widgets/VideosList/VideosRelated/videosRelated';

class VideoArticle extends Component {

    state = {
        article: {},
        team: {},
        teams: [],
        related: [],
    }

    componentWillMount() {
        axios.get(`${API_URL_VIDEOS}?id=${this.props.match.params.id}`)
        .then(response=>response.data[0])
        .then(article_data => {
            let article = article_data;
            axios.get(`${API_URL_TEAMS}?id=${article.team}`)
            .then(response=>response.data[0])
            .then(team=>{
                this.setState({
                    article,
                    team
                });
                this.getRelated();
            })
        })
    }

    getRelated = () => {
        axios.get(`${API_URL_TEAMS}`)
        .then(response=>response.data)
        .then(teams_data=>{
            let teams = teams_data;
            axios.get(`${API_URL_VIDEOS}?q=${this.state.team.city}&_limit=3`)
            .then(response => response.data)
            .then(related => {
                this.setState({
                    teams,
                    related
                });
                console.log(this.state);
            })
        })
    }

    render() {
        let article = this.state.article;
        let team = this.state.team;
        return (
            <div>
                <Header team={team} />
                <div className={style.videoWrapper}>
                    <h1>{article.title}</h1>
                    <iframe
                        title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article.url}`}>
                    </iframe>

                </div>
                <VideosRelated data={this.state.related} teams={this.state.teams} />
            </div>
        );
    }

}

export default VideoArticle;
