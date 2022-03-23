import { IAggregate } from "./IAggregate";

export interface IIterator {
  aggregate: IAggregate;
  hasNext(): boolean;
  next(): any;
}
