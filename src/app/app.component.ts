import { Component } from '@angular/core';
interface Child {
  name: string;
  age: number;
}

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkedInDate: number | null;
  children: Child[] | null;
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
    checkedIn: true,
    checkedInDate: 149074200000,
    children: [{name: 'Tobe', age: 6}, {name: 'Tony', age: 9}]
  },
    {
    id: 2,
    fullname: 'Mark',
    checkedIn: false,
      checkedInDate: null,
      children: null
  }];
}
