import mongoose from "mongoose";

export interface IBankAccountModel extends mongoose.Document {
    account: number;
}

const bankAccountSchema = new mongoose.Schema<IBankAccountModel>(
    {
        account: {
            type: Number
        }
    },
    {
        versionKey: false,
    }
);

export const BankAccountModel = mongoose.model<IBankAccountModel>(
    "accounts",
    bankAccountSchema
);
