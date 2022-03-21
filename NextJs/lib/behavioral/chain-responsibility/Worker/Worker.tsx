import { Product } from "../Product";

export abstract class Worker {
  protected nextWorker?: Worker;
  public setNextWorker(nextWorker: Worker): void {
    this.nextWorker = nextWorker;
  }
  abstract check(product: Product): boolean;
}
