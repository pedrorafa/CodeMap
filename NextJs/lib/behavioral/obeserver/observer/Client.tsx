import Message from "../subject/Message";
import IObserver from "./IObserver";

export default class Client implements IObserver {
  id: string;
  notification: string;

  constructor(id: string) {
    this.id = id;
    this.notification = "";
  }

  update(notify: Message): void {
    this.notification = notify.message;
  }
}
