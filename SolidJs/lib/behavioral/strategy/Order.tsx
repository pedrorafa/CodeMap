import { CreditPayer } from "./Payer/PayerCredit";
import { DebitPayer } from "./Payer/PayerDebit";
import { ETypePayer, IPayer } from "./Payer/IPayer";
import { TicketPayer } from "./Payer/PayerTicket";

export class Order {
  private _value: number = 0;
  private payer?: IPayer;

  private ticketPayer = new TicketPayer();
  private debitPayer = new DebitPayer();
  private creditPayer = new CreditPayer();

  public get values() {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
  }

  public setPayerMethod(payer: ETypePayer) {
    switch (payer) {
      case ETypePayer.Ticket:
        this.payer = this.ticketPayer;
        break;
      case ETypePayer.Debit:
        this.payer = this.debitPayer;
        break;
      case ETypePayer.Credit:
        this.payer = this.creditPayer;
        break;
    }
  }

  constructor() {
    this._value = 0;
    this.payer = this.ticketPayer;
  }

  public calcTax(): number {
    if (!this.payer) throw new Error("Payer method not defined!");
    return this.payer.calcTax(this._value);
  }
}
