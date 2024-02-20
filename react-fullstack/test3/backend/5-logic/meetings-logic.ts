import { OkPacket } from "mysql2";
import { execute } from "../2-dal/dal";
import { MeetingModel } from "../4-models/MeetingModel";

export async function getMeetingsbyTeamId(teamId: number): Promise<MeetingModel[]> {
    const query = 'SELECT * FROM meetings WHERE teamId = ?';
    const [results] = await execute<MeetingModel[]>(query, [teamId]);
    console.log(results)
    return results;
}

export async function addNewMeeting(meeting: MeetingModel): Promise<MeetingModel> {
    const { startTime, endTime, description, place, teamId } = meeting
    const query = 'INSERT INTO meetings (startTime, endTime, description, place ,teamId) VALUES(?,?,?,?,?)';
    const [results] = await execute<OkPacket>(query, [startTime, endTime, description, place, teamId]);
    const meetingsId = results.insertId;
    return {
        meetingsId,
        startTime, 
        endTime, 
        description, 
        place,
        teamId, 
    }
}