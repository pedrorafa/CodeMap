import i18n from "../../../i18n";
import IContext from "../Interface/IContext";
import IState from "../Interface/IState";

const messages: any = i18n.behavioral.state.waitingPayment;

export default class WaitingPaymentState implements IState {
  context: IContext;
  description: string;

  constructor(context: IContext) {
    this.context = context;
    this.description = messages.init;
  }

  pay(): void {
    this.context.previousState = this.context.currentState;
    this.context.currentState = this.context.payedState;
  }
  cancel(): void {
    this.context.previousState = this.context.currentState;
    this.context.currentState = this.context.cancelState;
  }
  send(): void {
    this.description = messages.error;
  }
}
