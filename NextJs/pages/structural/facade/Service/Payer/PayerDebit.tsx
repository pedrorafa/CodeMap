import { Payer } from "./Payer";

export class PayerDebit extends Payer {
  private tax: number = 1.01;
  public pay(): boolean {
    return this.order.value * this.tax <= this.order.client.balance;
  }
}
