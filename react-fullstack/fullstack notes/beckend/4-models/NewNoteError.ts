import { ErrorModel } from "./ErrorModel";

export class NewNoteError extends ErrorModel{
    constructor() {
        super();
        this.code = 400;
        this.message = 'must fill all fields!';
    }
}