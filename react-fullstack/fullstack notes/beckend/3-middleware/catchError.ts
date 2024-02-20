import { NextFunction, Request, Response } from "express";
import { ErrorModel } from "../4-models/ErrorModel";

export function catchError(err: ErrorModel, req: Request, res: Response, next: NextFunction) {
    res.status(err.code).send(err.message); //must be in this order
}