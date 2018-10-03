import { Passenger } from './../../../models/passenger';
import { Component, OnInit } from '@angular/core';
import {PassengersService} from '../../../services/passengers.service';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

   passengers: Passenger[];

    constructor(private passengerService: PassengersService) {
    this.passengerService.getPassengers().subscribe(obj => this.passengers =  obj as Array<Passenger>);
  }

  ngOnInit() {
  }

  handleRemove(event) {
      this.passengerService.removePassenger(event).
      pipe( catchError(this.handleError))
        //this.passengers = this.passengers.filter((p: Passenger) => {
         // return p.id !== (<Passenger>obj).id
        //})
  }

  handleEdit(event: Passenger) {
      console.log('editting...')
      this.passengerService.updatePassenger(event).pipe(
        tap(() => {console.log('tap...') })
       ).subscribe(obj => console.log(obj), error => this.handleError(error));
  }

  private handleError(error: HttpErrorResponse) {
      console.log('in error...')
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
