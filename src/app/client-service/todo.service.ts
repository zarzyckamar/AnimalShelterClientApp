import { Injectable } from '@angular/core';
import { Todo } from '../client-models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const apiUrl: String = 'http://localhost:8080';

@Injectable()
export class TodoService {


  private clientsUrl = 'http://localhost:8080/api/clients';


  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<any> {
    return this.http.get(`${apiUrl}/api/clients`);
  }



  createNewTodo(firstName: string, lastName:string, city:string, street:string) {
    const data = {

      firstName: firstName,
      lastName:lastName,
      city:city,
      street:street

    };

    const todo = new Todo(firstName, lastName, city, street);
    return this.http.post(`${apiUrl}/api/add`, todo).subscribe(res => {
      console.log(res);
    });
  }

  removeTodo(id): Observable<Todo> {
   const url = `${this.clientsUrl}/${id}`;
    return this.http.delete<Todo>(url);
  }


  updateTodo(todo: Todo) {
    return this.http.put(`${apiUrl}/api/clients/${todo.getId()}`, todo);
  }

  getUserById(id: number) {
    return this.http.get<Todo>(this.clientsUrl + '/' + id);
  }
  updateUser(todo: Todo) {
    return this.http.put(this.clientsUrl + '/' +todo.id, todo);
  }
}
