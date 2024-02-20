import { ErrorModel } from "./ErrorModel";

export class NullErrorModel extends ErrorModel {
    constructor(){
        super();
        this.code = 400;
        this.message = 'must fill all required fields!';
    }
}