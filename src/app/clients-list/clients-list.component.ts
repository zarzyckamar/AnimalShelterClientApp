import {Component, Input, OnInit} from '@angular/core';
import { TodoService } from '../client-service/todo.service';
import { Todo } from '../client-models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  todos: Todo[];
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }



  private getTodos() {
    this.todoService.getAllTodos().subscribe(res => {
      this.todos = res;
    });
  }

}
