export class TopPayer {
  private value: number = 0;
  private amounts: number = 0;
  private card: string = "";
  private cvv: number = 0;

  public setValue(value: number) {
    this.value = value;
  }
  public setAmounts(amounts: number) {
    this.amounts = amounts;
  }
  public setCard(card: string, cvv: number) {
    this.card = card;
    this.cvv = cvv;
  }

  public pay(): boolean {
    return !!this.value && !!this.amounts && !!this.card && !!this.cvv;
  }
}
