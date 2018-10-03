import { Injectable } from '@angular/core';
import {Passenger} from '../models/passenger';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RequestOptions} from '@angular/http';

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

  getPassenger(id: number): Observable<Object> {
    return this.http.get(HOST_URL + PASSENGER_API + `/${id}`);
  }

  updatePassenger(passenger: Passenger): Observable<Object> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.put(HOST_URL + PASSENGER_API + '/' + passenger.id, passenger, httpOptions);
  }

  removePassenger(passenger: Passenger): Observable<Object> {
    return this.http.delete(HOST_URL + PASSENGER_API + '/' + passenger.id);
  }

}
