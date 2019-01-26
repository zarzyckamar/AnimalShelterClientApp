import { Component, OnInit } from '@angular/core';
import { TodoService } from '../client-service/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddClientComponent implements OnInit {
  firstName: string;
  lastName: string;
  city: string;
  street: string;


  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.firstName = '';
    this.lastName = '';
    this.city = '';
    this.street = '';

  }

  createNewClient() {
    if (this.firstName !== '' && this.lastName !=='' && this.city !=='' && this.street !=='') {

      this.todoService.createNewTodo(this.firstName, this.lastName, this.city, this.street);

      this.firstName = '';
      this.lastName= '';
      this.city = '';
      this.street= '';

console.log("siema");
      alert (" Added new client!");
    } else {
      window.alert('Conajmniej jedno z pól jest puste');
    }
  }
}
