import mongoose from "mongoose";
import { CourseModel } from "./CurseModel";

export interface IStudentModel extends mongoose.Document {
    firstName: string;
    lastName: string;
    age: number;
    courseId: mongoose.Schema.Types.ObjectId;
}

const studentSchema = new mongoose.Schema<IStudentModel>({
    firstName: {
        type: String,
        required: true,
        minlength: [2, 'must contain at least 2 words']
    },
    lastName: {
        type: String,
        required: true,
        minlength: [2, 'must contain at least 2 words']
    },
    age: {
        type: Number,
        required: true,
        min: [0, 'must be positive']
    }
},
    {
        versionKey: false,
        toJSON: { virtuals: true }
    });


    studentSchema.virtual("course", {
        ref: CourseModel,
        localField: "courseId",
        foreignField: "_id",
        justOne: true
    })
export const StudentModel = mongoose.model<IStudentModel>('students', studentSchema)