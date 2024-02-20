import { Router } from "express";
import { MovieModel } from "../4-models/MoviesModel";
import { addMovie, deleteMovie, getMovies, getMoviesByTheaterId, getMoviesWithTheater, updateMovie } from "../5-logic/movies-logic";

export const moviesRouter = Router();


moviesRouter.get("/movies", async (req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
});

moviesRouter.get("/movies-with-theater", async (req, res) => {
const movies = await getMoviesWithTheater()
res.status(200).json(movies)
})


moviesRouter.get("/movies-per-theater/:theaterId", async (req, res) => {
    const { theaterId } = req.params;
    const movies = await getMoviesByTheaterId(theaterId);
    console.log(movies)
    res.status(200).json(movies);
});


moviesRouter.post("/movies", async (req, res) => {
    try {
        const rawMovie = new MovieModel(req.body)
        const movie = await addMovie(rawMovie);
        res.status(200).json(movie);
    } catch (error) {
        res.sendStatus(400);
    }
});


moviesRouter.put("/movies/:movieId", async (req, res) => {
    try {
        const { movieId } = req.params;
        const reqMovie = new MovieModel({...req.body, _id: movieId})
        const movie = await updateMovie(reqMovie);
        res.status(200).json(movie);
    } catch (error) {
        res.sendStatus(404);
    }
})


moviesRouter.delete("/movies/:movieId", async (req, res) => {
    const { movieId } = req.params;
    const movie = await deleteMovie(movieId);
    if (movie) {
    res.status(204).json(movie)
    } else {
        res.sendStatus(404);
    }
})