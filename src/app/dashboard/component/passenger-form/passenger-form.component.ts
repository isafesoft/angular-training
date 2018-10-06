import {Component, Input, OnInit} from '@angular/core';
import {Passenger} from '../../../models/passenger';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {

  @Input() detail: Passenger = null;
  constructor() { }

  ngOnInit() {
  }

  toggleCheckedIn(checkedIn: boolean) {
   if(checkedIn) {
     this.detail.checkedInDate = Date.now()
   }
  }

}
