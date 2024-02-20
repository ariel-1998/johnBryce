import express, { json } from "express";
import fileUpload from "express-fileupload";
import { catchErrors } from "./3-middleware/catchErrors";
import { requestDrtails } from "./3-middleware/requestDetails";
import { authRouter } from "./6-controller/auth-controller";
import { productRouter } from "./6-controller/products-controller";

const server = express();

server.use(json());
server.use(requestDrtails);
server.use(fileUpload());
server.use('/api', authRouter);
server.use('/api', productRouter);
server.use(catchErrors);

server.listen(3000, () => {
    console.log('success');
})