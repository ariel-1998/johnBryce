import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";
import { NotLoggedIn } from "../4-models/NotLoggedIn";
import { RoleError } from "../4-models/RoleError";
import { UserRole } from "../4-models/UserModel";
import { getUser } from "../5-logics/users-logic";


export  function validateToken(arr: UserRole[]) {
    return async (req: Request, res: Response, next: NextFunction) => {
        
        try {
            const token = req.headers.authorization.substring(7);
            const { sub } = decode(token);
            const { password, role } = await getUser(+sub);
            verify(token, password);
            if(!arr.includes(role)) {
                next(new RoleError());
                return;
            }
        } catch (error) {
            next(new NotLoggedIn());
            return;            
        }
        next();
    }
}

