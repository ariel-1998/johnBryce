import { NextFunction, Request, Response } from "express";

export function saturdayForbidden(req: Request, res: Response, next: NextFunction) {
    const today = new Date();
    const day = today.getDay();

    if (day === 2) {
        res.status(403).send('No access on Saturday!')
        return
    }
    next()
}