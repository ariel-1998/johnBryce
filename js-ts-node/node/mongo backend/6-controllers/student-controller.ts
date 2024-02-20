import { Router } from "express";
import { StudentModel } from "../4-models/StudentModel";
import { createNewStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } from "../5-logic/student-logic";

export const studentRouter = Router();

studentRouter.get('/students', async (req, res, next) => {
    const students = await getAllStudents();
    res.json(students);
})

studentRouter.get('/students/:id', async (req, res, next) => {
    try {
        const student = await getStudentById(+req.params.id);
    if (!student) {
        res.sendStatus(404);
        return;
    }
    res.json(student);
    } catch (error) {
        res.sendStatus(404);
    }
});

studentRouter.post('/students', async (req, res, next) => {
    const student = await deleteStudent(req.body);
    res.json(student);
});


studentRouter.delete('/students/:id', async (req, res, next) => {
    const student = await deleteStudent(req.body.id);
    res.json(student);
});


studentRouter.put('/students/:id', async (req, res, next) => {
    const student = await updateStudent(new StudentModel({_id: req.params.id, ...req.body}));
    res.json(student);
});
