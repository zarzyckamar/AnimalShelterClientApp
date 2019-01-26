import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import {Volunteer} from '../volunteer-models/volunteer';
import {VolunteerService} from '../volunteer-service/volunteer.service';

@Component({
  selector: 'app-volunteer-item',
  templateUrl: './volunteer-item.component.html',
  styleUrls: ['./volunteer-item.component.css']
})
export class VolunteerItemComponent implements OnInit {

  @Input() volunteer: Volunteer;
  @Output() removeItem: EventEmitter<Volunteer> = new EventEmitter();

  constructor(private volunteerService:VolunteerService) {}

  ngOnInit() {}

  remove() {
    this.removeItem.emit(this.volunteer);
  }
}
