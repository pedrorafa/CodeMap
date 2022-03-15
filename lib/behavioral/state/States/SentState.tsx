import IContext from "../Interface/IContext";
import IState from "../Interface/IState";

export default class SentState implements IState {
  context: IContext;
  description: string;

  constructor(context: IContext) {
    this.context = context;
    this.description = "Enviado";
  }

  pay(): void {
    this.description = "Pedido já foi enviado!";
  }
  cancel(): void {
    this.description = "Pedido já foi enviado!";
  }
  send(): void {
    this.description = "Pedido já foi enviado!";
  }
}
