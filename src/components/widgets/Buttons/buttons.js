import React from 'react';
import {Link} from 'react-router-dom';
import style from './buttons.css';

const buttons = (props) => {
    let template = null;

    switch (props.type) {
        case 'loadmore':
        template = (
            <div className={style.blue_btn}
                onClick={props.loadMore}>
                {props.callToAction}
            </div>
        );
        break;
        case 'linkTo':
        template = (
            <Link
                to={props.linkTo}
                className={style.blue_btn}
                >
                {props.callToAction}
            </Link>
        );
        break;
        default:
        template = null;
    }

    return template;
}

export default buttons;
