import { NextFunction, Response } from "express";
import { decode, verify } from "jsonwebtoken";
import { CustomRequest } from "../4-models/customRequest";
import { NotLoggedIn } from "../4-models/NotLoggedIn";
import { getUser } from "../5-logics/users-logic";

export async function tokenValidationOnly(req: CustomRequest, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization.substring(7);
        const { sub } = decode(token);
        const user = await getUser(+sub);
        verify(token, user.password);
        req.user = user;
        next();
    } catch (e) {
        next(new NotLoggedIn());
    }     
}
