import { CreditPayer } from "./CreditPayer";
import { IPayer } from "./IPayer";

export class Order {
  private value: number;
  private payer?: IPayer;

  public setValue(value: number) {
    this.value = value;
  }
  public setPayerMethod(payer: IPayer) {
    this.payer = payer;
  }

  constructor() {
    this.value = 0;
    this.payer = new CreditPayer()
  }

  public calcTax(): number {
    if (!this.payer) throw new Error("Payer method not defined!");
    return this.payer.calcTax(this.value);
  }
}
