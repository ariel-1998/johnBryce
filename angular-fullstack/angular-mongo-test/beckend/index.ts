import cors from "cors";
import express, { json } from "express";
import { connect } from "./2-utils/dal";
import { operationsRount } from "./6-controller/accountOperation-controller";

const app = express();

app.use(cors());
app.use(json());
app.use("/api", operationsRount)

app.listen(3001, () => {
    connect();
    console.log("prot 3001")
})