import React, { Component } from 'react';
import axios from 'axios';
import {API_URL_NEWS, API_URL_TEAMS} from '../../../../config';

import style from '../../articles.css';

import Header from './header';
import Body from './body';

class NewsArticle extends Component {

    state = {
        article: {},
        team:{},

    }

    componentWillMount() {
        axios.get(`${API_URL_NEWS}?id=${this.props.match.params.id}`)
        .then(response=>response.data[0])
        .then(data => {
            let article = data;
            axios.get(`${API_URL_TEAMS}?id=${article.team}`)
            .then(response=>response.data[0])
            .then(data=>{
                let team = data;
                this.setState({
                    article,
                    team
                })
            })
        })
    }

    render() {
        const article= this.state.article;
        const team = this.state.team;
        return (
            <div className={style.articleWrapper}>
                <Header team={team} date={article.date} author={article.author}/>
                <Body article={article}/>

            </div>
        );
    }

}

export default NewsArticle;
