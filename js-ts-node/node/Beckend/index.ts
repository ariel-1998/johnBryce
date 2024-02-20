import express, { json } from "express";
import { AuthRouter } from "./6-controllers/Auth-controller";
import { noteRouter } from "./6-controllers/Note-controller";
import { userRouter } from "./6-controllers/User-controller";
import cors from "cors";

const server = express();

server.use(json());
server.use(cors());
server.use("/api", userRouter);
server.use("/api", AuthRouter);
server.use("/api", noteRouter);

server.listen(3000, () => {
  console.log("Listening on port 3000...");
});
