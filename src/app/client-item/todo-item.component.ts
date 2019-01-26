import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../client-models/todo';
import { TodoService } from '../client-service/todo.service';
import {Router} from "@angular/router";



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() removeItem: EventEmitter<Todo> = new EventEmitter();
  p: number = 1;

 // constructor(private todoService: TodoService) {}

  constructor(private router: Router, private todoService: TodoService){}

  ngOnInit() {}


  public removeTodo(id) {
    console.log('remove');
    this.todoService.removeTodo(id).subscribe(
      (data) =>(console.log ("usuniete"))
    );
    window.location.reload(); //odswiezanie strony
    alert (" Person with id:"+id+ " is removed");
  }


  editUser(todo: Todo): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", todo.id.toString());
    this.router.navigate(['client-edit']);
  };
}
