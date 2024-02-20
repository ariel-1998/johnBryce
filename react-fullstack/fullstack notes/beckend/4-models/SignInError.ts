import { ErrorModel } from "./ErrorModel";

export class SignInError extends ErrorModel{
    constructor() {
        super();
        this.code = 400;
        this.message = 'you must fill all fields';
    }
}