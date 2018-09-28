import { Passenger } from './../../../models/passenger';
import { Component, OnInit } from '@angular/core';
import {PassengersService} from '../../../services/passengers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

   passengers: Passenger[];
    constructor(private passengerService: PassengersService) {
    this.passengers = passengerService.getPassengers();
  }

  ngOnInit() {
  }

  handleRemove(event) {
    this.passengers = this.passengers.filter((p: Passenger) => {
      return p.id !== event.id
    })
  }

  handleEdit(event) {
    this.passengers = this.passengers.map((p: Passenger) => {
      if(p.id === event.id) {
        p = {...p, ...event}
      }
      return p
    })
    console.log(event)
  }

}
