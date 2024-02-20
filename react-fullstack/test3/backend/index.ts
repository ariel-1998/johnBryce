import cors from 'cors';
import express, { json } from 'express';
import { errorCatcher } from './3-middleware/errorCatcher';
import { meetingsRouter } from './6-controller/meetings-controller';
import { teamsRouter } from './6-controller/teams-controller';
const server = express();

server.use(cors({ origin: ['http://localhost:3000'] }));

server.use(json());
server.use('/api', meetingsRouter);
server.use('/api', teamsRouter);
server.use(errorCatcher)

server.listen(3001, () => {
    console.log('success2');
});