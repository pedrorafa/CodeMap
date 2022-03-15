import IContext from "./Interface/IContext";
import IState from "./Interface/IState";
import CancelState from "./States/CancelState";
import PayedState from "./States/PayedState";
import SentState from "./States/SentState";
import WaitingPaymentState from "./States/WaitingPaymentState";

export default class Order implements IContext {
  currentState: IState;
  previousState: IState;

  waitingPaymentState: IState;
  payedState: IState;
  cancelState: IState;
  sentState: IState;

  constructor() {
    this.waitingPaymentState = new WaitingPaymentState(this);
    this.cancelState = new CancelState(this);
    this.payedState = new PayedState(this);
    this.sentState = new SentState(this);

    this.currentState = this.waitingPaymentState;
    this.previousState = this.waitingPaymentState;
  }

  public payOrder(): void {
    this.currentState.pay();
  }
  public cancelOrder(): void {
    this.currentState.cancel();
  }
  public sendOrder(): void {
    this.currentState.send();
  }

  public setState(nextState: IState): void {
    this.currentState = nextState;
  }
}
