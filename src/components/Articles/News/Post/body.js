import React from 'react';
import style from '../../articles.css';

const Body = (props) => (
    <div className={style.articleBody}>
        <h1>{props.article.title}</h1>
        <div className={style.articleImage}
            style={{
                background: `url(/images/articles/${props.article.image})`
            }}>
        </div>
        <div className={style.articleContent}>
            {props.article.body}
        </div>
    </div>
);

export default Body;
