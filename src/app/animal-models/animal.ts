export class Animal {
  id:number;
  nameAnimals: string;
  type: string;
  is_adopted:boolean;
  age:number;

  constructor(obj?: any) {
    this.id = (obj && obj.name) || '';
    this.nameAnimals = (obj && obj.name) || '';
    this.type = (obj && obj.name) || '';
    this.is_adopted = (obj && obj.name) || '';
    this.age = (obj && obj.name) || '';
  }

  getId(): number {
    return this.id;
  }

}
