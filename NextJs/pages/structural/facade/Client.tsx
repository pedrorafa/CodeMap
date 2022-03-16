export class Client {
  name: string = "";
  email: string = "";
  balance: number = 0;

  constructor(name: string, email: string, balance: number) {
    this.name = name;
    this.email = email;
    this.balance = balance;
  }
}
