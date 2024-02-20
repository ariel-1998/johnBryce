import express, { json } from "express";
import { coffeeRouter } from "./6-controller/coffees-controller";

const server = express();
server.use(json());

server.use('/api', coffeeRouter);

server.listen(3000, () => {
    console.log('listenning to port 3000...');
})