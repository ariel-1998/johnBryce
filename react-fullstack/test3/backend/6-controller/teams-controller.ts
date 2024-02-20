import express from "express";
import { getAllTeams } from "../5-logic/teams-logic";

export const teamsRouter = express.Router();

teamsRouter.get('/teams', async(req, res) => {
    const teams = await getAllTeams();
    res.status(200).json(teams);
})