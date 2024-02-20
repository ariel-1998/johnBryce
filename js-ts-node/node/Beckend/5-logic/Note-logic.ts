import { OkPacket } from "mysql2/promise";
import { execute } from "../2-utils/dal";
import { NotesModel } from "../4-models/NotesModel";
import { UserModel } from "../4-models/UserModel";

export async function getNoteById(id: number): Promise<NotesModel[]> {
  const query = ` SELECT * FROM fullstack.notes where idUser='${id}';`;
  const [rows] = await execute<NotesModel[]>(query, [id]);
  if (rows.length === 0) return null;
  return rows;
}

export async function addnote(idUser: number, title: string, content: string) {
  const query = `INSERT INTO fullstack.notes (idUser,Title,Content)
  VALUES ('${idUser}','${title}','${content}');`;
  const [result] = await execute<OkPacket>(query);
  return result;
}
// export async function deleteUser(id: number) {
//   const query = `DELETE from fullstack.users WHERE EmployeeID=${id}`;
//   const [result] = await execute<OkPacket>(query, [id]);
//   return result;
// }
