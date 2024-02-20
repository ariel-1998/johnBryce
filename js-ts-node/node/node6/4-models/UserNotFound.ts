import { ErrorModel } from "./ErrorModel";

export class UserNotFound extends ErrorModel {
    constructor() {
        super();
        this.code = 404;
        this.message = 'user name or password are incorrect!'
    }
}