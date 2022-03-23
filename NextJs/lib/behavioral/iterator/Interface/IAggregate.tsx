import { IIterator } from "./IIterator";

export interface IAggregate {
  iterator: IIterator;
  forEach(action: Function): void;
  search(action: any): any;
}
