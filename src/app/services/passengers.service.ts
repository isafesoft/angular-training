import { Injectable } from '@angular/core';
import {Passenger} from '../models/passenger';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const HOST_URL = 'http://localhost:3000';
const PASSENGER_API = '/api';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {

  constructor(private http: HttpClient) {

  }
  getPassengers(): Observable<Object> {
     return this.http.get(HOST_URL + PASSENGER_API);
  }
}
