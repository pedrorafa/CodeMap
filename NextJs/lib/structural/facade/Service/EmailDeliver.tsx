import { Order } from "./Order";

export class EmailDeliver {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  public sendEmail(message: string): boolean {
    console.log(`${this.order.client.email} - ${message}`);
    return true;
  }
}
