import { NextFunction, Request, Response } from "express";
import { ErrorModel } from "../4-models/ErrorModel";

export function catchAll(error: ErrorModel, req: Request, res: Response, next: NextFunction) {
    console.log(`[Books server]: ERROR - ${req.method}, - ${req.url}`);
    res.status(error.code ?? 500).json({error: error.message});
    return;   
}