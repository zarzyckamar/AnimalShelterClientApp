import { Component, OnInit } from '@angular/core';
import {TodoService} from "../client-service/todo.service";
import {Router} from "@angular/router";
import {Todo} from "../client-models/todo";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  firstName: string;
  lastName: string;
  city: string;
  street: string;


  todo: Todo;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private todoService: TodoService) { }

  ngOnInit() {
/*    let id = localStorage.getItem("editUserId");
    if(!id) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      street:['', Validators.required]
    });
    this.todoService.getUserById(+id)
      .subscribe( data => {
        this.editForm.setValue(data);
      });*/
  }

  onSubmit() {
    this.todoService.updateUser(this.editForm.value)

  }

}
