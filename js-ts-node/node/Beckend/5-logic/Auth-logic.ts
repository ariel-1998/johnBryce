import { execute } from "../2-utils/dal";
import { UserModel } from "../4-models/UserModel";

export async function register(
  username: string,
  password: string
): Promise<UserModel[]> {
  const query = `INSERT INTO fullstack.users (userName,password) VALUES ('${username}','${password}');`;
  const [rows] = await execute<UserModel[]>(query);
  return rows;
}

export async function login(
  userName: string,
  password: string
): Promise<UserModel> {
  const query = `SELECT * FROM fullstack.users where userName='${userName}' and password='${password}'`;
  console.log(query);
  const [rows] = await execute<UserModel[]>(query);
  return rows[0];
}
