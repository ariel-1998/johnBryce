import express, { json } from 'express';
import { connectToMongo } from './2-utils/dal';
import { studentRouter } from './6-controllers/student-controller';

const server = express();

server.use(json());

server.use('/api', studentRouter);

server.listen(3000, () => {
    console.log('Listening on port 3000...');
    connectToMongo();
})