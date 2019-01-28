import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import {NgxPaginationModule} from 'ngx-pagination';

//client
import { ClientsListComponent } from './clients-list/clients-list.component';
import { TodoItemComponent } from './client-item/todo-item.component';
import { TodoService } from './client-service/todo.service';
import { AddClientComponent } from './client-add/add-todo.component';
//animal
import {AnimalItemComponent} from './animal-item/animal-item.component';
import {AnimalService} from './animal-service/animal.service';
import {AnimalsListComponent} from './animal-list/animal-list.component';
//volunteer
import { VolunteerItemComponent} from './volunteer-item/volunteer-item.component';
import { VolunteersListComponent } from './volunteers-list/volunteers-list.component';
import  { VolunteerService } from './volunteer-service/volunteer.service';
import {ClientEditComponent}from './client-edit/client-edit.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'clients-list', pathMatch: 'full' },
  {path: '', redirectTo: 'volunteers-list', pathMatch: 'full'},
  {path: '', redirectTo: 'animal-list', pathMatch: 'full'},
  {path: 'clients-list', component: ClientsListComponent },
  {path: 'add-client', component: AddClientComponent },
  {path: 'volunteers-list', component: VolunteersListComponent},
  {path: 'animals-list', component: AnimalsListComponent},
  {path: 'client-edit', component: ClientEditComponent}


];


@NgModule({
  declarations: [AppComponent, ClientsListComponent,AnimalItemComponent,ClientEditComponent,  AnimalsListComponent, TodoItemComponent, AddClientComponent,VolunteerItemComponent ,VolunteersListComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule,NgxPaginationModule,  RouterModule.forRoot(ROUTES)],
  providers: [TodoService, VolunteerService, AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
