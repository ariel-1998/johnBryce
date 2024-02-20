import { ErrorModel } from "./ErrorModel";

export class ProductNotFound extends ErrorModel {
    constructor() {
        super();
        this.code = 404;
        this.message = `product not found`;
    }
}