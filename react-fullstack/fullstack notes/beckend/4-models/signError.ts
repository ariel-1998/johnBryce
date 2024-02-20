import { ErrorModel } from "./ErrorModel";

export class SignError extends ErrorModel{
    constructor() {
        super();
        this.code = 400;
        this.message = 'not signed in.';
    }
}