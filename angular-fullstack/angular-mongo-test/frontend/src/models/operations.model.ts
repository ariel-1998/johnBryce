const enum Actions {
    Deposit = "deposit", Loan = "loan", Withdraw = "withdraw" 
}

export interface OperationModel {
    accountNumber?: number;
    type?: Actions;
    amount?: number;
    date?: Date;
    interest?: number;
    payments?: number;
}
