import express, { json } from "express";
import { catchError } from "./3-middleware/catchError";
import { noteRouter } from "./6-controller/note-controller";
import { userRouter } from "./6-controller/user-controller";
import cors from 'cors';
const server = express();

server.use(cors({ origin: ['http://localhost:3000'] }));

server.use(json());
server.use('/api', userRouter); //always first

server.use('/api', noteRouter);

server.use(catchError);

server.listen(3001, () => {
    console.log('success2');
});