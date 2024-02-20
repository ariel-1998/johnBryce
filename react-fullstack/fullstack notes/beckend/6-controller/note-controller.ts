import express from "express";
import { jwtVerification } from "../3-middleware/jwtVerification";
import { CustomReq } from "../4-models/customReq";
import { NewNoteError } from "../4-models/NewNoteError";
import { NoteError } from "../4-models/noteError";
import { NoteModel } from "../4-models/NoteModel";
import { TryCatchError } from "../4-models/TryCatchError";
import { addNote, deleteNote, getAllNotes, updateNote } from "../5-logic/note-logic";

export const noteRouter = express.Router();
noteRouter.use(jwtVerification);

noteRouter.get('/notes', async (req: CustomReq, res, next) => {
    const user = req.user;
    const notes = await getAllNotes(user.id);
    res.json(notes).status(200);
});     



noteRouter.post('/notes', async (req: CustomReq, res, next) => {
    const { title, task, date }:NoteModel = req.body;

    if(!task || !date){
        next(new NewNoteError());
        return;
    }
    const user = req.user;
    const note: NoteModel = { ...req.body, userId: user.id };
    const newNote = await addNote(note);
    res.json(newNote).status(200);
});


noteRouter.delete('/notes/:id', async (req: CustomReq, res, next) => {
    const { id } = req.params
    const results = deleteNote(+id, req.user.id);
    res.json(results).status(200);
});

noteRouter.put('/notes/update/:id', async (req: CustomReq, res) => {
    const { id } = req.params;
    const userId = req.user.id
    const note:NoteModel = {...req.body, id, userId}
    console.log(note)
    await updateNote(note);
    res.sendStatus(200);
})