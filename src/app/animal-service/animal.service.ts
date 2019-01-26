import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Animal} from '../animal-models/animal';
import {Todo} from '../client-models/todo';

const apiUrl: String = 'http://localhost:8080';

@Injectable()
export class AnimalService {

  private animalsUrl = 'http://localhost:8080/api/animal';

  constructor(private http: HttpClient) {}

  getAllAnimals(): Observable<any> {
    return this.http.get(`${apiUrl}/api/allanimals`);
  }

  createNewAnimalss(nameAnimals: string, type:string, is_adopted:boolean, age:number) {
    const data = {
      nameAnimals: name,
      type: type,
      is_adopted: is_adopted,
      age: age

    };
    const todo = new Animal(data);
    return this.http.post(`${apiUrl}/api/addanimal`, todo).subscribe(res => {
      console.log(res);
    });
  }

  removeAnimal(id): Observable<Animal> {
    const url = `${this.animalsUrl}/${id}`;
    return this.http.delete<Animal>(url);
  }

  updateVolunteer(volunteer: Animal) {
    return this.http.put(`${apiUrl}/api/animals/${volunteer.getId()}`, volunteer);
  }
}
