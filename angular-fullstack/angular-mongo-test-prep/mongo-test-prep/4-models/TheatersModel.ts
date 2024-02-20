import mongoose from "mongoose";
import { MovieModel } from "./MoviesModel";

export interface ITheatersModel extends mongoose.Document {
    name: string;
}

const TheaterSchema = new mongoose.Schema<ITheatersModel>(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        toJSON: { virtuals: true}
    }
);

TheaterSchema.virtual("movie", {
    ref: MovieModel,
    localField: "_id",
    foreignField: "theaterId"
})

export const TheatersModel = mongoose.model<ITheatersModel>(
    "theaters",
    TheaterSchema
);
