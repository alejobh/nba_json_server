import React from 'react';
import style from '../articles.css';

const TeamInfo = (props) => (
    <div className={style.articleTeamHeader}>
        <div className={style.left}
            style={{
                background: `url(/images/teams/${props.team.logo})`
            }}>

        </div>
        <div className={style.right}>
            <div>
                <span>{props.team.city} {props.team.name}</span>
            </div>
            <div>
                <strong>
                    <span>W{props.team.stats[0].wins} - L{props.team.stats[0].defeats}</span>
                </strong>
            </div>
        </div>
    </div>
);

export default TeamInfo;