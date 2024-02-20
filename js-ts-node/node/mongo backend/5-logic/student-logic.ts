import { IStudentModel, StudentModel } from "../4-models/StudentModel";

export function getAllStudents(): Promise<IStudentModel[]> {
    return StudentModel.find().exec()
}

export function getStudentById(id: number): Promise<IStudentModel> {
    return StudentModel.findById(id).exec()
}

export async function createNewStudent(student: IStudentModel) {
    const errors = student.validateSync();
    if(!errors) return student.save();
    return errors;
}

export async function deleteStudent(id: number) {
    const deleted = await StudentModel.findByIdAndDelete(id).exec();
    if (!deleted) return undefined
};

export async function updateStudent(student: IStudentModel){
    const errors = student.validateSync();    
    if (!errors) return StudentModel.findByIdAndUpdate(student._id, student, {returnOriginal: false}).exec();
    return errors
};