import React from 'react';
import TeamInfo from '../../Elements/teamInfo';

const Header = (props) => {

    const teamInfo = (team) => {
        return (team && team.stats) ?
        <TeamInfo team={props.team} />
        : null
    }


    return (
        <div>
            {teamInfo(props.team)}
        </div>
    );
}

export default Header;
