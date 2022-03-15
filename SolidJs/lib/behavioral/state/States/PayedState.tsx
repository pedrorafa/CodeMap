import IContext from "../Interface/IContext";
import IState from "../Interface/IState";

export default class PayedState implements IState {
  context: IContext;
  description: string;

  constructor(context: IContext) {
    this.context = context;
    this.description = "Pago";
  }

  pay(): void {
    this.description = "Pedido já foi pago!";
  }
  cancel(): void {
    this.context.previousState = this.context.currentState;
    this.context.currentState = this.context.cancelState;
  }
  send(): void {
    this.context.previousState = this.context.currentState;
    this.context.currentState = this.context.sentState;
  }
}
