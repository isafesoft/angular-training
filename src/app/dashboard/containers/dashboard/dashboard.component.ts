import { Passenger } from './../../../models/passenger';
import { Component, OnInit } from '@angular/core';
import {PassengersService} from '../../../services/passengers.service';
import {catchError} from 'rxjs/operators';

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
      this.passengerService.removePassenger(event).subscribe(obj => console.log(obj), error => console.log(error))
        //this.passengers = this.passengers.filter((p: Passenger) => {
         // return p.id !== (<Passenger>obj).id
        //})
  }

  handleEdit(event: Passenger) {
      this.passengerService.updatePassenger(event).subscribe(obj => {
        this.passengers = this.passengers.map((p: Passenger) => {
          if(p.id === event.id) {
            p = {...p, ...event}
          }
          return p
        })
      });
  }

}
