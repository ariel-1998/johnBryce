import  express, { json } from "express";
import { catchAll } from "./3-middleware/error-handle";
import { logRequest } from "./3-middleware/log";
import { saturdayForbidden } from "./3-middleware/saturdays";
import { booksRouter } from "./6-controllers/books-controller";

const server = express();

server.use(saturdayForbidden);
server.use(json());
server.use(logRequest);
server.use('/api', booksRouter);
server.use(catchAll);


server.listen(3000, () => {
    console.log('listenning to port 3000...');
})