import Message from "../subject/Message";
import News from "../subject/News";
import IObserver from "./IObserver";

export default class Patner implements IObserver {
  id: string;
  prefix: string = "Dear Patner";
  alert?: string = "";

  constructor(id: string) {
    this.id = id;
  }

  update(notify: Message): void {
    this.alert = notify.message;
  }
}
