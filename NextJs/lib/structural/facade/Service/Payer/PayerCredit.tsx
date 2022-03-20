import { Payer } from "./Payer";

export class PayerCredit extends Payer {
  private tax: number = 1.05;
  public pay(): boolean {
    return this.order.value * this.tax <= this.order.client.balance;
  }
}
