import { IGateway } from "./Interface/IGateway";

export class Charge {
  private _gateway: IGateway;
  value: number;
  amounts: number;
  card: string;
  cvv: number;

  constructor(gateway: IGateway) {
    this._gateway = gateway;
  }

  public set gateway(gateway: IGateway) {
    this._gateway = gateway;
  }

  public payCharge(): boolean {
    this._gateway.setValue(this.value);
    this._gateway.setAmounts(this.amounts);
    this._gateway.setCard(this.card);
    this._gateway.setCVV(this.cvv);

    if (this._gateway.validateCard()) return this._gateway.pay();
    return false;
  }
}
