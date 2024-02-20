import mongoose from "mongoose";
import { IStudentModel } from "./StudentModel";

export interface ICourseModel extends mongoose.Document {
    name: string;
    description: string;
}

const courseSchema = new mongoose.Schema<ICourseModel>({
    name: {
        type: String,
        required: true,
        minlength: [2, 'must contain at least 2 words']
    },
    description: {
        type: String,
        required: true,
        minlength: [2, 'must contain at least 2 words']
    },

},
    {
        versionKey: false
    });

    

export const CourseModel = mongoose.model<ICourseModel>('courses', courseSchema)