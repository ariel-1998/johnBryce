import mysql, { RowDataPacket } from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "liormym102938",
  port: 3306,
  database: "fullstack",
});

export function execute<T>(query: string, params?: any[]) {
  return pool.promise().execute<T & RowDataPacket[]>(query, params);
}
