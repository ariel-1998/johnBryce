import { NextFunction, Response } from "express";
import { CustomRequest } from "../4-models/customRequest";
import { RoleError } from "../4-models/RoleError";
import { UserRole } from "../4-models/UserModel";

export function adminValidationOnly(req: CustomRequest, res:  Response, next: NextFunction) {
    if(req?.user?.role === UserRole.Admin) {
        next();
    } else {
        next(new RoleError());
    }
}