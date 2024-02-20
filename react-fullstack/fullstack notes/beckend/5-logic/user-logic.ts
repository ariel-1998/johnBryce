// export function getUserById(id) {
//     const query = 'SELECT id FROM users WHERE id = ?';
//     const
// }

import { OkPacket } from "mysql2/promise";
import { execute } from "../2-dal/dal";
import { UserModel } from "../4-models/UserModel";

export async function login(username: string, password: string): Promise<UserModel> {
    const query = 'SELECT * FROM users WHERE (username, password) = (?, ?)';
    const [rows] = await execute<UserModel[]>(query, [username, password]); //[ {user} ] || []
    return rows[0]
}

export async function register(user: UserModel): Promise<UserModel> {
    const { username, password, email } = user;
    const query = `INSERT INTO users(username, password, email) VALUES(?, ?, ?)`;
    const [results] = await execute<OkPacket>(query, [username, password, email]); 
    const id = results.insertId;
    
    return {
        id,
        username,
        password,
        email
    }
}

export async function getUserById(id: number): Promise<UserModel> {
    const query = 'select * from users WHERE id = ?'
    const [user] = await execute<UserModel[]>(query, [id]); // [ { user } ]
    return user[0];
}