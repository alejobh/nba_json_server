import React, { Component } from 'react';
import axios from 'axios';
import {API_URL_NEWS} from '../../../config';
import SliderTemplate from './slider_template';

class NewsSlider extends Component {

    state = {
        news: []
    }

    componentWillMount() {
        axios.get(`${API_URL_NEWS}?_start=${this.props.start}&_end=${this.props.amount}`)
        .then(response=>response.data)
        .then(data=>{
            this.setState({
                news: data
            })
        })
        ;
    }

    render() {
        return (
            <SliderTemplate data={this.state.news} type={this.props.type} settings={this.props.settings}/>
        );
    }

}

export default NewsSlider;
