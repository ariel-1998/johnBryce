import { ErrorModel } from "./ErrorModel";

export class DuplicateErrorModel extends ErrorModel{
    constructor() {
        super();
        this.code = 400;
        this.message = 'username or email already exist';
    }
}