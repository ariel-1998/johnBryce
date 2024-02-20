import mongoose from "mongoose";
import { TheatersModel } from "./TheatersModel";

export interface IMovieModel extends mongoose.Document {
    name: string;
    dateTime: Date;
    duration: number;
    theaterId: mongoose.Schema.Types.ObjectId;
}

const MovieSchema = new mongoose.Schema<IMovieModel>(
    {
        name: {
            type: String,
            required: true,
            minlength: [2, "Last name have to be longer than 2 chars"],

        },
        dateTime: {
            type: Date,
            required: true
        },
        duration: {
            type: Number,
            required: true,
            min: [2, "Last name have to be longer than 2 chars"],
        },
        theaterId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    },
    {
        versionKey: false,
        toJSON: { virtuals: true },
        id: false
    }
);

MovieSchema.virtual("theater", {
    ref: TheatersModel,
    localField: "theaterId",
    foreignField: "_id",
    justOne: true
});


// MovieSchema.virtual('theaters', {
//     ref: TheatersModel,
//     localField: "_id",
//     foreignField: "theaterId",
//     justOne: true
// })

export const MovieModel = mongoose.model<IMovieModel>(
    "movies",
    MovieSchema
);
