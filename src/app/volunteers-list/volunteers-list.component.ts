import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../volunteer-service/volunteer.service';
import { Volunteer } from '../volunteer-models/volunteer';
import {Todo} from '../client-models/todo';

@Component({
  selector: 'app-volunteers-list',
  templateUrl: './volunteers-list.component.html',
  styleUrls: ['./volunteers-list.component.css']
})
export class VolunteersListComponent implements OnInit {
  volunteers: Volunteer[];
  p: number = 1;

  constructor(private volunteerService: VolunteerService) {}

  ngOnInit() {
    this.getVolunteers();
  }

  public removeVolunteer(volunteer: Volunteer) {
    console.log(volunteer, 'remove');
    this.volunteerService.removeVolunteer(volunteer).subscribe(res => {
      this.volunteers = this.volunteers.filter(el => el.getId() !== volunteer.getId());
    });
  }

  private getVolunteers() {
    this.volunteerService.getAllVolunteers().subscribe(res => {
      this.volunteers = res;
    });
  }
}
