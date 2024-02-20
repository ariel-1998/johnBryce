
import { ErrorModel } from "./ErrorModel";

export class TryCatchError extends ErrorModel{
    constructor(e: string, code: number) {
        super();
        this.code = code;
        this.message = e;
    }
}