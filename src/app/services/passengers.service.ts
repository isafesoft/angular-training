import { Injectable } from '@angular/core';
import {Passenger} from '../models/passenger';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const HOST_URL = 'http://localhost:3000';
const PASSENGER_API = '/passengers';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {

  constructor(private http: HttpClient) {

  }
  getPassengers(): Observable<Object> {
     return this.http.get(HOST_URL + PASSENGER_API);
  }

  updatePassenger(passenger: Passenger): Observable<Object> {
    return this.http.put(HOST_URL + PASSENGER_API + '/' + passenger.id, passenger);
  }

  removePassenger(passenger: Passenger): Observable<Object> {
    return this.http.delete(HOST_URL + PASSENGER_API + '/' + passenger.id);
  }
}
