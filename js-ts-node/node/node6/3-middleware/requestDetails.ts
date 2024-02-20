import { NextFunction, Request, Response } from 'express';
import fs from 'fs/promises';


const API_REQ = './1-assets/requests.txt';

export async function requestDrtails(req: Request, res: Response, next: NextFunction) {
    const data = `request date:${new Date().toISOString()} \n method: ${req.method} \n URL: ${req.originalUrl} \n ip: ${req.ip}\n `
    await fs.appendFile(API_REQ, data);
    next()
}