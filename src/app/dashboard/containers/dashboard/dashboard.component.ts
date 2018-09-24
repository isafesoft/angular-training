import { Passenger } from './../../../models/passenger';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

   passengers: Passenger[];
    constructor() { 
    this.passengers = [{
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
