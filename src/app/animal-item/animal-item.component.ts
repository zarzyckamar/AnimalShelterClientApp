import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import {Animal} from '../animal-models/animal';
import {AnimalService} from '../animal-service/animal.service';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.css']
})
export class AnimalItemComponent implements OnInit {
  @Input() animal: Animal;
  @Output() removeItem: EventEmitter<Animal> = new EventEmitter();
  constructor(private animalService:AnimalService) {}

  ngOnInit() {}

  public remove(id) {
    console.log('remove');
    this.animalService.removeAnimal(id).subscribe(
      (data) =>(console.log ("usuniete"))
    );

    window.location.reload(); //odswiezanie strony
    alert (" Animal with id:"+id+ " is reserved");
  }
}
