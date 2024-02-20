import { OkPacket } from "mysql2";
import { execute } from "../2-dal/dal";
import { NoteModel } from "../4-models/NoteModel";

export async function getAllNotes(userId: number): Promise<NoteModel[] | null> {
    const query = 'SELECT * FROM notes WHERE userId = ?';
    const [rows] = await execute<NoteModel[]>(query, [userId]); //[] || noteModel[]
    // const check = new Date(rows[0].date.toISOString().split('T')[0])
    // rows[0].date = check
    // const d = new Date()
    // const a = rows.map((row) => {
    //     return {...row, date: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`}
    // })
    // console.log(a)
    // if(!rows.length) return null;
    return rows;
} 


export async function addNote(note: NoteModel):Promise<NoteModel> {
    const { title, task, date, userId } = note;
    const query = `INSERT INTO notes (title, task, date, userId) VALUES(?, ?, ?, ?)`;
    const [results] = await execute<OkPacket>(query, [title, task, date, userId]);
    const id = results.insertId;
    return {
        id,
        title,
        task,
        date,
        userId
    }
} 


export async function deleteNote(noteId: number, userId: number) {
    const query = `DELETE FROM notes WHERE id = ? And userId = ?`;
    const [results] = await execute<OkPacket>(query, [noteId, userId]);
    return results;
}

export async function updateNote(note: NoteModel) {
    const { title, task, date, id, userId } = note;
    const query = `UPDATE notes
                    SET title = ?, task = ?, date = ?
                    WHERE id = ? AND userId = ?`;
    const [results] = await execute(query,[title, task, date, id,userId]);
    return results;
}