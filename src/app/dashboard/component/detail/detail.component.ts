import {Component, EventEmitter, Input, OnInit, Output, OnChanges} from '@angular/core';
import {Passenger} from '../../../models/passenger';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit, OnChanges {

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

  ngOnChanges(change) {
    if(change.detail) {
      this.detail = {...change.detail.currentValue}
    }
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
