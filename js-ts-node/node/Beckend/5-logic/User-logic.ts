import { OkPacket } from "mysql2/promise";
import { execute } from "../2-utils/dal";
import { UserModel } from "../4-models/UserModel";

export async function getAllUsers(): Promise<UserModel[]> {
  const query = "SELECT * FROM users;";
  const [rows] = await execute<UserModel[]>(query);
  return rows;
}

export async function getUserById(id: number): Promise<UserModel> {
  const query = `SELECT * FROM fullstack.users WHERE EmployeeID = ${id}`;
  const [rows] = await execute<UserModel[]>(query, [id]);
  if (rows.length === 0) return null;
  return rows[0];
}

export async function deleteUser(id: number) {
  const query = `DELETE from fullstack.users WHERE EmployeeID=${id}`;
  const [result] = await execute<OkPacket>(query, [id]);
  return result;
}
