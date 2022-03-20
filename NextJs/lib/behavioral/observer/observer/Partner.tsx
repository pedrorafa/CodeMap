import i18n from "../../../i18n";
import { Message } from "../subject/Message";
import IObserver from "./IObserver";

const messages: any = i18n.behavioral.observer.Partner;

export class Partner implements IObserver {
  id: string;
  prefix: string = messages.prefix;
  alert?: string = "";

  constructor(id: string) {
    this.id = id;
  }

  update(notify: Message): void {
    this.alert = this.prefix + " " + notify.message;
  }
}
