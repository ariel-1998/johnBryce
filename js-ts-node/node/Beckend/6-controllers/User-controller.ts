import { Router } from "express";
import { deleteUser, getAllUsers, getUserById } from "../5-logic/User-logic";

export const userRouter = Router();

userRouter.get("/getAllUsers", async (req, res, next) => {
  const users = await getAllUsers();
  res.json(users);
});

userRouter.get("/getUser/:id([0-9]+)", async (req, res, next) => {
  const user = await getUserById(+req.params.id);
  if (!user) {
    res.sendStatus(404);
    return;
  }
  res.json(user);
});

userRouter.delete("/deleteUser/:id([0-9]+)", async (req, res, next) => {
  const user = await deleteUser(+req.params.id);
  res.status(202);
  res.json(user);
});
