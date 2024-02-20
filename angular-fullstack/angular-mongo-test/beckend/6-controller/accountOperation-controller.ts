import { Router } from "express";
import { AccountOperationModel } from "../4-models/AccountOperationModel";
import { addOperationToAccount, getOperationsByAccountNum } from "../5-logic/accountOperations-logic";

export const operationsRount = Router()

operationsRount.get("/operations/:accountNum", async (req, res, next) => {
    const { accountNum } = req.params;
    const operations = await getOperationsByAccountNum(+accountNum);
    res.status(200).json(operations);
});


operationsRount.post("/operations", async (req, res, next) => {
    try {
        const rawOperation = new AccountOperationModel(req.body)
        const operations = await addOperationToAccount(rawOperation);
        res.status(200).json(operations);
    } catch (error) {
        res.status(404).json("you must fill all fields")
    }
});