import React from 'react';
import style from './slider.css';
import {Link} from 'react-router-dom';
import {NEWS_BASE_PATH} from '../../../config';

const SliderItem = (props) => {
    const item = props.item;
    return (
        <div className={style.featured_item}>
            <div className={style.featured_image}
                style={{
                    background: `url(../images/articles/${item.image})`
                }}
                ></div>
            <Link to={`${NEWS_BASE_PATH}/${item.id}`}>
                <div className={style.featured_caption}>
                    {item.title}
                </div>
            </Link>
        </div>
    );
}

export default SliderItem;
