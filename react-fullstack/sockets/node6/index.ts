import express, { json } from "express";
import fileUpload from "express-fileupload";
import { catchErrors } from "./3-middleware/catchErrors";
import { requestDrtails } from "./3-middleware/requestDetails";
import { authRouter } from "./6-controller/auth-controller";
import { productRouter } from "./6-controller/products-controller";
import cors from 'cors';
import { Server } from 'socket.io'

const expressServer = express();
expressServer.use(cors())

const messages = []

const httpServer = expressServer.listen(3000, () => {
    console.log('success');
});

const options = { cors: { origin: '*' } }

const socketServer = new Server(httpServer, options);
socketServer.on('connection', (socket) => {


        socket.emit('history', messages);


    socket.emit('message', { name: Math.random() * 100, message: Math.random() * 100 });

    socket.on('message', data => {
        console.log('new message: ' + JSON.stringify(data));
        messages.push(data)
        socketServer.sockets.emit('message', data);
    });
})