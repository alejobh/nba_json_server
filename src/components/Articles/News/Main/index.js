import React from 'react';
import NewsSlider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewsList/newsList';
import style from './index.css';

const NewsMain = (props) => (
    <div>
        <NewsSlider
            type="featured"
            settings={{
                dots:false
            }}
            start={0}
            amount={3}/>
        <h2 className={style.relatedNewsTitle}>Related news</h2>
        <NewsList
            type="cardMain"
            loadmore={true}
            start={3}
            amount={10}
            />
    </div>
)

export default NewsMain;
