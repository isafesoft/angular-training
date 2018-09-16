import { Component } from '@angular/core';
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: false,
  },
    {
    id: 2,
    fullname: 'Mark',
    checkedIn: true
  }];
}
