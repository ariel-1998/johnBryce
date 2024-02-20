import cors from "cors";
import express, { json } from "express";
import { connect } from "./2-utils/dal";
import { moviesRouter } from "./6-controller/movies-controller";
import { theaterRouter } from "./6-controller/theaters-controller";

const app = express();

app.use(cors())

app.use(json());
app.use("/api", theaterRouter);
app.use("/api", moviesRouter)


app.listen(3001, () => {
    console.log("port 3001");
    connect();
})