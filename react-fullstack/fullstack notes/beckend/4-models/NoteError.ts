import { ErrorModel } from "./ErrorModel";

export class NoteError extends ErrorModel{
    constructor() {
        super();
        this.code = 400;
        this.message = 'no notes found!';
    }
}