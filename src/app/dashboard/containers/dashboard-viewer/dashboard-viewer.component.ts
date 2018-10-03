import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../../models/passenger';
import {PassengersService} from '../../../services/passengers.service';

@Component({
  selector: 'app-dashboard-viewer',
  templateUrl: './dashboard-viewer.component.html',
  styleUrls: ['./dashboard-viewer.component.css']
})
export class DashboardViewerComponent implements OnInit {

  passenger: Passenger = null;
  constructor(private passengerService: PassengersService) { }

  ngOnInit() {
    this.passengerService.getPassenger(1).subscribe(obj => this.passenger = <Passenger>obj)
  }

}
