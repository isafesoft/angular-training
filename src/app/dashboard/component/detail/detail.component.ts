import {Component, Input, OnInit} from '@angular/core';
import {Passenger} from '../../../models/passenger';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() detail: Passenger;
  constructor() { }

  ngOnInit() {
  }


}
