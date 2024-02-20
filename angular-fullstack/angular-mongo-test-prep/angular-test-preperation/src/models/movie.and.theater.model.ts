import { MovieModel } from "./movie.model";
import { TheaterModel } from "./thearter.model";

interface MovieAndTheaterModel extends MovieModel {
theater: TheaterModel
}
