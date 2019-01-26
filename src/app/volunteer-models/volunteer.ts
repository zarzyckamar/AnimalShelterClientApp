export class Volunteer {
    id: number;
  firstName: string;
  lastName: string;
  age:number;

  constructor(obj?: any) {
    this.id = (obj && obj.name) || '';
    this.firstName = (obj && obj.name) || '';
   this.lastName = (obj && obj.name) || '';
this.age = (obj && obj.name) || '';
}

  getId(): number {
    return this.id;
  }

}
