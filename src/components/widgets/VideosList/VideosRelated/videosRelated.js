import React from 'react';
import style from '../videosList.css';
import VideoListTemplate from '../videosListTemplate';

const VideosRelated = (props) => (
    <div className={style.relatedWrapper}>
        <h2>Related Videos</h2>
        <VideoListTemplate data={props.data} teams={props.teams}/>
    </div>
);

export default VideosRelated;
