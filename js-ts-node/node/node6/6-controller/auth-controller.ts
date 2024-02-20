import express from "express";
import { addUser, getAllUsers, getUser } from "../5-logics/users-logic";
import { UserModel } from "../4-models/UserModel";
import { generateToken } from "../2-utils/jwt";
import { UserNotFound } from "../4-models/userNotFound";

export const authRouter = express.Router();


authRouter.post('/auth/register', async (req, res) => {
    const user = req.body;
    await addUser(user);

    // generate token
    const token = generateToken(user);
    res.status(201).send(token);
});


authRouter.post('/auth/login', async (req, res, next) => {
    const { username, password } = req.body;
    const users = await getAllUsers()
    const user = users.find(usr => usr.username === username && usr.password === password);

    try{
        const token = generateToken(user);
        res.status(201).send(token);
    } catch (e) {
        next(new UserNotFound())
    }
});