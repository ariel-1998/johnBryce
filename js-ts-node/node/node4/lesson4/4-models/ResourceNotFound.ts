import { ErrorModel } from "./ErrorModel";

export class ResourceNotFound extends ErrorModel {
    constructor() {
        super();
        this.code = 406;
        this.message = 'Resource not found!'
    }
}