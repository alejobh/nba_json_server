
const getTeam = (teams, id) => {
    let data = teams.find((item) => item.id === id);
    if(data) {
        return data;
    } else {
        return "not found";
    }
}

const getTeamName = (teams, id) => {
    let team = getTeam(teams,id);
    if(team) {
        return team.name;
    } else {
        return "not found";
    }
}

export {
    getTeamName
}
