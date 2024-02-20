import axios from "axios";
import { TeamModel } from "../models/TeamModel";
import apiConfig from "../utils/apiConfig";

class TeamsService {

    async getAllTeams(): Promise<TeamModel[]> {
        const { data } = await axios.get(apiConfig.API_URL + `/teams`);
        return data;
    }
}

const teamsService = new TeamsService()
export default teamsService;