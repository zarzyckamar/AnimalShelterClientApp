export class Todo {
    id: number;
  firstName: string;
  lastName: string;
  city: string;
  street:string;

  constructor(firstName:string, lastName:string, city:string, street:string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.street = street;
  }


  getId(): number {
    return this.id;
  }

}
