import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../../models/passenger';
import {PassengersService} from '../../../services/passengers.service';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-dashboard-viewer',
  templateUrl: './dashboard-viewer.component.html',
  styleUrls: ['./dashboard-viewer.component.css']
})
export class DashboardViewerComponent implements OnInit {

  passenger: Passenger = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengersService) { }

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) =>
        this.passengerService.getPassenger(parseInt(params.get('id'), 10))
      )).subscribe(obj => this.passenger = <Passenger>obj)
  }

  onUpdatePassenger(p: Passenger) {
    this.passengerService
      .updatePassenger(p)
      .subscribe((obj) => {
        this.passenger = {...this.passenger, ...<Passenger>obj}
      })
  }
}
