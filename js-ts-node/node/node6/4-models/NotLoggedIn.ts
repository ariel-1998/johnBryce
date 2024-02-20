import { ErrorModel } from "./ErrorModel";

export class NotLoggedIn extends ErrorModel {
    constructor() {
        super();
        this.code = 401;
        this.message = 'not logged in'
    }
}