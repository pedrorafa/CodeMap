import { Message } from "../subject/Message";
import IObserver from "./IObserver";

export class Partner implements IObserver {
  id: string;
  prefix: string = "Dear Partner";
  alert?: string = "";

  constructor(id: string) {
    this.id = id;
  }

  update(notify: Message): void {
    this.alert = notify.message;
  }
}
