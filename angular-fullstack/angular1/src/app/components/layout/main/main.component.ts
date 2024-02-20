import { Component } from '@angular/core';
import { studentModel } from 'src/models/student.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public name = 'ariel';
  public query = '';

  public students: studentModel[] = [
    {
      firstName: 'guy',
      lastName: 'ml',
    },
    {
      firstName: 'lidor',
      lastName: 'levy',
    },
    {
      firstName: 'daniel',
      lastName: 'osi',
    },
  ];

  public clickMe(a: string) {
    alert(a)
  }
}
