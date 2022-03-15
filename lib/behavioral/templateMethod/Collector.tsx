import Gateway from "./Gateway";

export default abstract class Collector {
  private _gateway: Gateway;
  private _value: number = 0;

  public get value(): number {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
  }

  constructor(gateway: Gateway) {
    this._gateway = gateway;
  }

  abstract Deduction(): number;
  protected Tax(): number {
      return 0;
  }

  public Charge(): boolean {
    let charge = this._value + this.Tax() - this.Deduction();

    return this._gateway.Charge(charge);
  }
}
