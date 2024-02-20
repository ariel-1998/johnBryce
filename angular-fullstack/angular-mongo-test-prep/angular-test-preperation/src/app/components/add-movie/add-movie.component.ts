import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { TheatersService } from 'src/app/services/theaters.service';
import { MovieModel } from 'src/models/movie.model';
import { TheaterModel } from 'src/models/thearter.model';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit{
  theaters: TheaterModel[] = [];
  movie: MovieModel | any = {};
  error: any;

  constructor(
    private theaterService: TheatersService,
    private movieService: MoviesService
  ) { }

  async ngOnInit() {
    this.theaters = await this.theaterService.getAllTheaters()
  }

  async addMovie() {
    try {
      await this.movieService.addMovie(this.movie)
    } catch (error: any) {
      this.error = error
    }
  }

  
}
