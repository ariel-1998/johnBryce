import { Router } from "express";
import { decode } from "jsonwebtoken";
import { addnote, getNoteById } from "../5-logic/Note-logic";
export const noteRouter = Router();

noteRouter.get("/getNotes", async (req, res, next) => {
  // const notes = await getNoteById(+req.query.id);
  const token = req.headers.authorization.substring(7);
  const { sub } = decode(token);
  const notes = await getNoteById(+sub);
  res.json(notes);
});

noteRouter.post("/addNote", async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const token = req.headers.authorization.substring(7);
  const { sub } = decode(token);
  const note = await addnote(+sub, title, content);
  res.json(note);
});
