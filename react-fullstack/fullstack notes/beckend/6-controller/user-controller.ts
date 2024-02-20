import express from "express";
import { generateToken } from "../2-dal/jwt";
import { DuplicateErrorModel } from "../4-models/DuplicateErrorModel";
import { SignInError } from "../4-models/SignInError";
import { WrongDtails } from "../4-models/WrongDetails";
import { login, register } from "../5-logic/user-logic";

export const userRouter = express.Router();

userRouter.post('/register', async (req, res, next) => {
    const { username, password, email } = req.body;

    if (username && password && email) {
        const newUser = { username, password, email };
        try {
            const user = await register(newUser);
            const token = generateToken(user);
            res.send(token).status(200);
        } catch (e) {
            next(new DuplicateErrorModel());
            return;
        }
    }
    next(new SignInError());
});



userRouter.post('/login', async (req, res, next) => {
    const { username, password } = req.body;

    if(!username || !password) {    
        next(new SignInError());
        return;
    }
    const user = await login(username, password);

    if(!user) { 
        next(new WrongDtails());
        return;
    }
    console.log(user)

    const token = generateToken(user);
    res.send(token).status(200);
});