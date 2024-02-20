// export function getMovies(): Promise<IAccountOperationModel[]> {
//     return MovieModel.find().exec()
// }

import { AccountOperationModel, IAccountOperationModel } from "../4-models/AccountOperationModel";

export function getOperationsByAccountNum(accountNum: number): Promise<IAccountOperationModel[]> {
    return AccountOperationModel.find({accountNumber: accountNum}).exec()
}

export async function addOperationToAccount(operation: IAccountOperationModel) {
    const errors = operation.validateSync()
    const bank = await getAccount(operation.accountNumber);
    if (!bank[0] && !errors) { //delete the "!" 
        return operation.save()
    }
    else throw new Error("Invalid request");
}

export function getAccount(account: number) {
    return AccountOperationModel.find({account: account}).exec() 
    //change AccountOperationModel to BankAccountModel
}

