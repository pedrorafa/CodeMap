import { Payer } from "./Payer";

export class PayerTicket extends Payer {
  private tax: number = 1;
  public pay(): boolean {
    return this.order.value * this.tax <= this.order.client.balance;
  }
}
