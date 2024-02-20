import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MeetingModel } from "../../models/MeetingModel";
import { TeamModel } from "../../models/TeamModel";
import meetingsService from "../../services/meetingsService";
import teamsService from "../../services/teamsService";
import "./Content.css";
import Meetings from "./Meetings/Meetings";
import Teams from "./Teams/Teams";

function Content(): JSX.Element {

    const [teams, setTeams] = useState<TeamModel[]>();
    const [selected, setSelected] = useState<number>();


    useEffect(() => {
        teamsService.getAllTeams()
            .then(res => {
                setTeams(res);
                setSelected(res[0].teamId)
            })
            .catch(e => console.log('there was a problem connecting to the server'))
    }, []);


    return (
        <div className="Content">
            {!teams && 'loading...'}
            {teams && <select defaultValue={teams[0].teamId}
            onChange={(e: React.SyntheticEvent) => setSelected((e.target as any).value)}>
                {teams.map(team => (
                    <Teams key={team.teamId} team={team} />
                ))}
            </select>}

            {selected && <Meetings selected={selected}  />}
        </div>
    );
}

export default Content;

