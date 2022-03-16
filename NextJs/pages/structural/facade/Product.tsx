export class Product {
  value: number = 0;
  name: string = "";
  description: string = "";

  constructor(value: number, name: string, description: string) {
    this.value = value;
    this.name = name;
    this.description = description;
  }
}
