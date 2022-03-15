import IObserver from "../observer/IObserver";
import ISubject from "./ISubject";
import News from "./News";

export default class Newsletter implements ISubject {
  message: News = new News();
  registered: IObserver[] = [];

  subscribe(observer: IObserver): boolean {
    this.registered.push(observer);
    return true;
  }
  unsubscribe(id: string): boolean {
    this.registered = this.registered.filter((r) => r.id !== id);
    return true;
  }
  notify(message: News): void {
    this.registered.forEach((r) => r.update(message));
  }
}
