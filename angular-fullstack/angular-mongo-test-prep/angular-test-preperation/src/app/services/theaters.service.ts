import { Injectable } from '@angular/core';
import { TheaterModel } from 'src/models/thearter.model';

@Injectable({
  providedIn: 'root'
})
export class TheatersService {

  getAllTheaters(): Promise<TheaterModel[]> {
    return fetch("http://localhost:3001/api/theaters")
      .then(res => res.json())
  }
}
