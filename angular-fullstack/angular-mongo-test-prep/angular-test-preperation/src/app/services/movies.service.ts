import { Injectable } from '@angular/core';
import axios from 'axios';
import { MovieModel } from 'src/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  getMoviesByTheaterId(theaterId: string): Promise<MovieModel[]> {
    return fetch("http://localhost:3001/api/movies-per-theater/" + theaterId)
      .then(res => res.json())
  }

  deleteMovie(theaterId: string): Promise<MovieModel> {
    return axios.delete("http://localhost:3001/api/movies/" + theaterId)
  }

  addMovie(movie: MovieModel): Promise<MovieModel> {
    return axios.post("http://localhost:3001/api/movies", movie);
  }

  updateMovie(movie: MovieModel): Promise<MovieModel> {
    return axios.put("http://localhost:3001/api/movies/" + movie._id, movie);

  }
}
