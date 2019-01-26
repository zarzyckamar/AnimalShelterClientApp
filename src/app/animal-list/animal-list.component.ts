import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal-service/animal.service';
import { Animal } from '../animal-models/animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalsListComponent implements OnInit {
  animals: Animal[];

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.getAnimals();
  }

  public removeAnimal(animal: Animal) {
    console.log(animal, 'remove');
    this.animalService.removeAnimal(animal).subscribe(res => {
      this.animals = this.animals.filter(el => el.getId() !== animal.getId());
    });
  }

  private getAnimals() {
    this.animalService.getAllAnimals().subscribe(res => {
      this.animals = res;
    });
  }
}

