import React, { Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {API_URL_NEWS, NEWS_BASE_PATH, API_URL_TEAMS} from '../../../config';
import style from './newsList.css';
import Button from '../Buttons/buttons';
import CardInfo from '../CardInfo/cardInfo';
class NewsList extends Component {

    state = {
        teams: [],
        items:[],
        start:this.props.start,
        amount: this.props.amount,
        end:this.props.start + this.props.amount,
        loadmore: this.props.loadmore
    }

    componentWillMount() {
        this.request(this.state.start, this.state.end);
    }

    request = (start,end) => {
        if(this.state.teams.length < 1) {
            axios.get(`${API_URL_TEAMS}`)
            .then(response=>response.data)
            .then(data => {
                this.setState({
                    teams: data,
                })
            })
        }

        axios.get(`${API_URL_NEWS}?_start=${start}&_end=${end}`)
        .then(response=>response.data)
        .then(data => {
            this.setState({
                items:[...this.state.items, ...data],
                start,
                end
            });
        })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount
        this.request(this.state.end, end);
    }

    renderNews = (type) => {
        let template = null;

        switch (type) {
            case 'card':
            template = this.state.items.map( (item, i) => (
                <CSSTransition
                    classNames={{
                        enter: style.newslist_wrapper,
                        enterActive: style.newslist_wrapper_enter
                    }}
                    timeout={500}
                    key={i}>
                    <div className={style.newslist_item}>
                        <Link to={`${NEWS_BASE_PATH}/${item.id}`}>
                            <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                            <h2>{item.title}</h2>
                        </Link>
                    </div>
                </CSSTransition>
            ));
            break;
            case 'cardMain':
            template = this.state.items.map( (item, i) => (
                <CSSTransition
                    classNames={{
                        enter: style.newslist_wrapper,
                        enterActive: style.newslist_wrapper_enter
                    }}
                    timeout={500}
                    key={i}>
                    <Link to={`${NEWS_BASE_PATH}/${item.id}`}>
                        <div className={style.flex_wrapper}>
                            <div className={style.left}
                                style={{
                                    background: `url(/images/articles/${item.image})`
                                }}>
                                <div></div>
                            </div>
                            <div className={style.right}>
                                <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                <h2>{item.title}</h2>
                            </div>
                        </div>
                    </Link>
                </CSSTransition>
            ));
            break;
            default:
            template = null;

        }

        return template;
    }

    render() {

        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list_news">
                    {this.renderNews(this.props.type)}
                </TransitionGroup>

                <Button
                    type="loadmore"
                    loadMore={()=>this.loadMore()}
                    callToAction="Load more news"
                    />
            </div>
        );
    }

}

export default NewsList;
