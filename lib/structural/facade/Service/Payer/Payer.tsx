import { Order } from "../Order";

export abstract class Payer {
  order: Order;
  
  constructor(order: Order) {
    this.order = order;
  }

  abstract pay(): boolean;
}

export enum ETypePayer {
  Ticket,
  Debit,
  Credit,
}
