import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Volunteer} from '../volunteer-models/volunteer';

const apiUrl: String = 'http://localhost:8080';

@Injectable()
export class VolunteerService {
  constructor(private http: HttpClient) {}

  getAllVolunteers(): Observable<any> {
    return this.http.get(`${apiUrl}/api/allvolunteers`);
  }

  createNewVolunteers(firstname: String, lastname:String, age:number) {
    const data = {
      firstname: firstname,
      lastname:lastname,
      age:age

    };
    const todo = new Volunteer(data);
    return this.http.post(`${apiUrl}/api/addvol`, todo).subscribe(res => {
      console.log(res);
    });
  }
  removeVolunteer(volunteer: Volunteer) {
    return this.http.delete(`${apiUrl}/api/volunteers/${volunteer.getId()}`);
  }

  updateVolunteer(volunteer: Volunteer) {
    return this.http.put(`${apiUrl}/api/volunteers/${volunteer.getId()}`, volunteer);
  }
}
