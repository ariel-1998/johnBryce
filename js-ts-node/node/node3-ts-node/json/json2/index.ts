import * as express from 'express';
import { randomNum } from './functions';

const server = express();

server.listen(3000, () => {
    console.log("3000");
});

server.get('/random', (req, res) => {
    res.send(randomNum().toString())
})