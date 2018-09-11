import React from 'react';
import FontAwesome from 'react-fontawesome';
import style from './cardInfo.css';
import {getTeamName} from '../../../utils/teams';

const CardInfo = (props) => {
    return (
        <div className={style.cardInfo}>
            <span className={style.teamName}>
                {getTeamName(props.teams, props.team)}
            </span>
            <span className={style.date}>
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        </div>
    );

}

export default CardInfo;
