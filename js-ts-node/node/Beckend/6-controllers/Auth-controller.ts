import { Router } from "express";
import { generateToken } from "../2-utils/jwt";
import { login, register } from "../5-logic/Auth-logic";
import { deleteUser, getAllUsers, getUserById } from "../5-logic/User-logic";

export const AuthRouter = Router();

AuthRouter.post("/register", async (req, res, next) => {
  const user = req.body;
  await register(user.username, user.password);
  const token = generateToken(user);
  res.status(201).send(token);
});

AuthRouter.post("/login", async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await login(username, password);
  if (!user) {
    next(new Error("The user already exists in the system"));
    return;
  }
  const token = generateToken(user);
  res.status(201).send(token);
});
