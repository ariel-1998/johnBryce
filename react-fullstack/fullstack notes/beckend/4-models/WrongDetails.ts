import { ErrorModel } from "./ErrorModel";

export class WrongDtails extends ErrorModel{
    constructor() {
        super();
        this.code = 400;
        this.message = 'username or password are incorrect';
    }
}