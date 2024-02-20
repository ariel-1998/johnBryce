import mongoose from "mongoose";

const enum Actions {
    Deposit = "deposit", Loan = "loan", Withdraw = "withdraw" 
}

export interface IAccountOperationModel extends mongoose.Document {
    accountNumber: number; 
    type: Actions;
    amount: number;
    date: Date;
    interest?: number;
    payments?: number;
}


const accountOperationModel = new mongoose.Schema<IAccountOperationModel>(
    {
        accountNumber: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            enum: ["deposit", "loan", "withdraw"],
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        interest: Number,
        payments: Number
    },
    {
        versionKey: false,
    }
);


export const AccountOperationModel = mongoose.model<IAccountOperationModel>(
    "operations",
    accountOperationModel
);
