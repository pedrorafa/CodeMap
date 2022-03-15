import IContext from "../Interface/IContext";
import IState from "../Interface/IState";

export default class CancelState implements IState {
  context: IContext;
  description: string;

  constructor(context: IContext) {
    this.context = context;
    this.description = "Cancelado";
  }

  pay(): void {
    this.description = "Pedido já foi cancelado!";
  }
  cancel(): void {
    this.description = "Pedido já foi cancelado!";
  }
  send(): void {
    this.description = "Pedido já foi cancelado!";
  }
}
