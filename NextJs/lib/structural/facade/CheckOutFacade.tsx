import { EmailDeliver } from "./Service/EmailDeliver";
import { Order } from "./Service/Order";
import { Payer } from "./Service/Payer/Payer";
import { PayerCredit } from "./Service/Payer/PayerCredit";
import { PayerDebit } from "./Service/Payer/PayerDebit";
import { PayerTicket } from "./Service/Payer/PayerTicket";

export class CheckOutFacade {
  order: Order;
  emailDeliver: EmailDeliver;

  constructor(order: Order) {
    this.order = order;
    this.emailDeliver = new EmailDeliver(order);
    this.creditPayer = new PayerCredit(this.order);
    this.debitPayer = new PayerDebit(this.order);
    this.ticketPayer = new PayerTicket(this.order);
  }

  private creditPayer: PayerCredit;
  private debitPayer: PayerDebit;
  private ticketPayer: PayerTicket;

  private pay(payer: Payer): boolean {
    let payResult: boolean = payer.pay();
    return (
      payResult &&
      this.emailDeliver.sendEmail(
        payResult ? "Pago com sucesso!" : "Erro ao realizar pagamento!"
      )
    );
  }

  public payWithCredit(): boolean {
    return this.pay(this.creditPayer);
  }
  public payWithDebit(): boolean {
    return this.pay(this.debitPayer);
  }
  public payWithTicket(): boolean {
    return this.pay(this.ticketPayer);
  }
}
