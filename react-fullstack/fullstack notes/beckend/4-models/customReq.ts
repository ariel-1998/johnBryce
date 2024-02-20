import { UserModel } from "./UserModel";
import { Request } from "express";

export interface CustomReq extends Request {
    user: UserModel;
}