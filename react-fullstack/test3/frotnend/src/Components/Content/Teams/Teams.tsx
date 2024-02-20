import { TeamModel } from "../../../models/TeamModel";
import "./Teams.css";

interface TeamsProps {
	team: TeamModel
}

function Teams({ team }: TeamsProps): JSX.Element {
    return (
        <option value={team.teamId}>{team.teamName}</option>
    );
}

export default Teams;
