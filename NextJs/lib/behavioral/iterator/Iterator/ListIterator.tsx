import { IIterator } from "../Interface/IIterator";
import { List } from "../List";

export class ListIterator implements IIterator {
  aggregate: List;
  index: number = 0;

  constructor(list: List) {
    this.aggregate = list;
  }

  hasNext(): boolean {
    return this.aggregate.itens.length - 1 >= this.index;
  }
  next() {
    this.index++;
    return this.aggregate.itens[this.index - 1];
  }
}
