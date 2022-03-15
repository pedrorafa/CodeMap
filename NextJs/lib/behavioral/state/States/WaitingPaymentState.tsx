import IContext from "../Interface/IContext";
import IState from "../Interface/IState";

export default class WaitingPaymentState implements IState {
  context: IContext;
  description: string;

  constructor(context: IContext) {
    this.context = context;
    this.description = "Aguardando pagamento";
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
    this.description = "Pedido aguardando pagamento, não pode ser enviado!";
  }
}
