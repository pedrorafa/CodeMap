export class EasyPay {
  protected value: number = 0;
  protected amounts: number = 0;
  protected card: string = "";
  protected cvv: number = 0;

  setValue(value: number): void {
    this.value = value;
  }
  setAmounts(amounts: number): void {
    this.amounts = amounts;
  }
  setCard(card: string): void {
    this.card = card;
  }
  setCVV(cvv: number): void {
    this.cvv = cvv;
  }
  validateCard(): boolean {
    return !!this.value && !!this.amounts && !!this.card && !!this.cvv;
  }
  pay(): boolean {
    if (this.validateCard()) return true;
    return false;
  }
}
