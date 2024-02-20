import { ErrorModel } from "./ErrorModel";

export class RoleError extends ErrorModel {
    constructor() {
        super();
        this.code = 404;
        this.message = 'not premitted!'
    }
}