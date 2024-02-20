import { NextFunction, Request, Response } from "express";
import { ErrorModel } from "../4-models/ErrorModel";
import fs from 'fs/promises';

export async function catchErrors(err: ErrorModel, req: Request, res: Response, next: NextFunction) {
    const errorList = './1-assets/errors.txt';
    const error = `Date: ${new Date().toISOString()} \n method: ${req.method} \n URL: ${req.originalUrl} \n ip: ${req.ip}\n `
    await fs.appendFile(errorList, error);
    res.status(err.code).send(err.message);
    return;
} 