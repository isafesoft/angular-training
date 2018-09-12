import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mark Template Lesson 1';
  numberOne = 1;
  numberTwo = 2;
  isHappy = true;
  date = Date.now();
  name = '';

  handleInput(event) {
   this.name = event;
  }
}
