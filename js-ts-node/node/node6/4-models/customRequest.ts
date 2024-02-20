import { Request } from "express";
import { UserModel } from "./UserModel";

export interface CustomRequest extends Request {
    user: UserModel
}