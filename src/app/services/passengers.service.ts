import { Injectable } from '@angular/core';
import {Passenger} from '../models/passenger';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {

  constructor(private http: HttpClient) {
    console.log(this.http)
  }
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
