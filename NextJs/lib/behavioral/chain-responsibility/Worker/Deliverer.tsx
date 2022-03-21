import { Product } from "../Product";
import { Worker } from "./Worker";

export class Deliverer extends Worker {
  check(product: Product): boolean {
    if (product.delivered) return true;
    if (this.nextWorker) return this.nextWorker?.check(product);

    return false;
  }
}
