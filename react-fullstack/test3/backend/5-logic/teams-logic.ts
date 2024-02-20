import { execute } from "../2-dal/dal";
import { TeamModel } from "../4-models/TeamModel";

export async function getAllTeams():Promise<TeamModel[]> {
    const query = 'SELECT * FROM teams';
    const [results] = await execute<TeamModel[]>(query);
    return results;
}