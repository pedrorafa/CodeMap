import i18n from "../../../i18n";
import IContext from "../Interface/IContext";
import IState from "../Interface/IState";

const messages: any = i18n.behavioral.state.sent;

export default class SentState implements IState {
  context: IContext;
  description: string;

  constructor(context: IContext) {
    this.context = context;
    this.description = messages.init;
  }

  pay(): void {
    this.description = messages.error;
  }
  cancel(): void {
    this.description = messages.error;
  }
  send(): void {
    this.description = messages.error;
  }
}
