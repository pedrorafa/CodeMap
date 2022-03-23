import { IAggregate } from "./Interface/IAggregate";
import { IIterator } from "./Interface/IIterator";
import { ListIterator } from "./Iterator/ListIterator";

export class List implements IAggregate {
  iterator: IIterator;
  itens: any[];

  constructor() {
    this.itens = [0, 1, 2];
    this.iterator = new ListIterator(this);
  }

  forEach(action: Function): void {
    while (this.iterator.hasNext()) action(this.iterator.next());
  }
  search(action: any) {
    throw new Error("Method not implemented.");
  }
}
