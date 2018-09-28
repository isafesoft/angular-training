import { Injectable } from '@angular/core';
import {Passenger} from '../models/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {

  constructor() { }
  getPassengers(): Passenger[] {
    return [{
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
}
