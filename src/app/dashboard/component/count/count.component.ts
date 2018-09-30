import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Passenger} from '../../../models/passenger';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit, OnChanges {

  @Input() items: Passenger[];
  checkedIn: number = 0;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.items) {
      this.checkedIn = this.items.reduce((num, item) => num += item.checkedIn ? 1 : 0, 0)
    }
    console.log('changes..')
  }

}
