import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { TheatersService } from 'src/app/services/theaters.service';
import { MovieModel } from 'src/models/movie.model';
import { TheaterModel } from 'src/models/thearter.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent  implements OnInit{
  public theaters: TheaterModel[] = [];
  public movies: MovieModel[] = [];
  public selected = ''

  constructor(
    private theatersService: TheatersService,
    private movieService : MoviesService
    ) {}
  
  async ngOnInit() {
    this.theaters = await this.theatersService.getAllTheaters();
  }

  async getMovies() {
    this.movies = await this.movieService.getMoviesByTheaterId(this.selected)

  }

  async deleteMovie(movieId: string) {
    await this.movieService.deleteMovie(movieId);
    await this.getMovies()
  }
  
}
