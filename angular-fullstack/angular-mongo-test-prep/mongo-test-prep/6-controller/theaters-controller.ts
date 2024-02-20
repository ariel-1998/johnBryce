import { Router } from "express";
import { getAllTheaters, getTheatersWithMovies } from "../5-logic/theaters-logic";

export const theaterRouter = Router();

theaterRouter.get("/theaters", async (req, res) => {
    const theaters = await getAllTheaters();
    res.status(200).json(theaters);
});




theaterRouter.get("/withmovies", async (req, res) => {
    const theaters = await getTheatersWithMovies();
    res.status(200).json(theaters);
});