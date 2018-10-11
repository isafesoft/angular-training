import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Passenger} from '../../../models/passenger';
import {Baggage} from '../../../models/baggage';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {

  @Input() detail: Passenger = null;
  @Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>()
  baggage: Baggage[];
  constructor() {
    this.baggage = [{
      key: 'none',
      value: 'No Baggage'
    },
      {
        key: 'hand',
        value: 'Hand Bag'
      },
      {
        key: 'hold',
        value: 'Hold Bag'
      }
    ]
  }

  ngOnInit() {
  }

  toggleCheckedIn(checkedIn: boolean) {
   if(checkedIn) {
     this.detail.checkedInDate = Date.now()
   }
  }

  handleSubmit(value: Passenger, valid: boolean) {
    if (valid) {
      this.update.emit(value)
    }
  }

}
