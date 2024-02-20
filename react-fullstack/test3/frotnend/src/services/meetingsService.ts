import axios from "axios";
import { MeetingModel } from "../models/MeetingModel";
import apiConfig from "../utils/apiConfig";

class MeetingsService {

    async getMeetingsByTeamId(teamId: number): Promise<MeetingModel[]> {
        const { data } = await axios.get(apiConfig.API_URL + `/meetings/${teamId}`);
        return data;
    }

    async addMeetingToTeam(meeting: MeetingModel): Promise<MeetingModel> {
        const { data } = await axios.post(apiConfig.API_URL + `/meetings`, meeting);
        return data;
    }
}

const meetingsService = new MeetingsService()
export default meetingsService;