import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public name: string = "ariel"
  public query: string = ''
  yell = 'yellow'

  public students = [
    {
      firstName: 'ariel',
      lastName: 'kashani'
    },
    {
      firstName: 'meyrav',
      lastName: 'kashanii'
    }
  ]
  clickMe(args: Event, num: number) {
    console.log('click' + num +'/n', args)
  }


}
