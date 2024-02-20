import { NextFunction, Request, Response } from "express";

export function putLog(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    console.log(`user wants to update prduct with the id of ${id}`);
    next()
}
