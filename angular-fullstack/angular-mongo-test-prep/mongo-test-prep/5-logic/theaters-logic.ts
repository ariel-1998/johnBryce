import { ITheatersModel, TheatersModel } from "../4-models/TheatersModel";

export function getAllTheaters(): Promise<ITheatersModel[]> {
    return TheatersModel.find().exec();
}







export function getTheatersWithMovies() {
    return TheatersModel.find().populate("movie").exec()
} 

export function getTheaterWithMovies(theaterId: string) {

} 