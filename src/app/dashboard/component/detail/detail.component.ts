import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Passenger} from '../../../models/passenger';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  @Input() detail: Passenger;
  @Output() remove: EventEmitter<Passenger> = new EventEmitter();
  @Output() edit: EventEmitter<Passenger> = new EventEmitter();
  editting: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onUpdateName(newName) {
    this.detail.fullname = newName
  }

  toggleEdit() {
    this.editting = !this.editting;
    if(!this.editting) {
      this.edit.emit(this.detail)
    }
  }

  onRemove() {
    this.remove.emit(this.detail)
  }
}
