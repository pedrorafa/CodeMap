import { TopPayer } from "../Adapted/TopPayer";
import { IGateway } from "../Interface/IGateway";

export class TopPayerAdapter implements IGateway {
  topPayer: TopPayer;
  private card: string;
  private cvv: number;

  constructor(topPayer: TopPayer) {
    this.topPayer = topPayer;
  }

  setValue(value: number): void {
    this.topPayer.setValue(value);
  }
  setAmounts(amounts: number): void {
    this.topPayer.setAmounts(amounts);
  }
  setCard(card: string): void {
    this.card = card;
    this.topPayer.setCard(this.card, this.cvv);
  }
  setCVV(cvv: number): void {
    this.cvv = cvv;
    this.topPayer.setCard(this.card, this.cvv);
  }
  validateCard(): boolean {
    return true;
  }
  pay(): boolean {
    return this.topPayer.pay();
  }
}
