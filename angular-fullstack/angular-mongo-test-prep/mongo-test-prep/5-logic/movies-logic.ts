import { IMovieModel, MovieModel } from "../4-models/MoviesModel";



export function getMovies(): Promise<IMovieModel[]> {
    return MovieModel.find().exec()
}

export function getMoviesWithTheater(): Promise<IMovieModel[]> {
    return MovieModel.find().populate("theater").exec()
}


export function getMoviesByTheaterId(theaterId: string): Promise<IMovieModel[]> {
    return MovieModel.find({ theaterId: theaterId }).exec()
}


export function addMovie(movie: IMovieModel): Promise<IMovieModel> {
    const errors = movie.validateSync();
    if(!errors) return movie.save();
    throw new Error(errors.message);
}


export async function deleteMovie(movieId: string): Promise<IMovieModel | undefined> {
    const deleted =  await MovieModel.findByIdAndDelete(movieId).exec();
    return deleted;
}

export async function updateMovie(movie: IMovieModel): Promise<IMovieModel> {
    const errors = movie.validateSync();
    if(!errors) {
        return MovieModel.findByIdAndUpdate(movie._id, movie, {
            returnOriginal: false,
        });
    }
    throw new Error(errors.message);
}