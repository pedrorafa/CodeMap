import { Product } from "../Product";
import { Worker } from "./Worker";

export class Deliverer extends Worker {
  process(product: Product): Product {
    if (!product.delivered) product.delivered = "Delivered";
    if (this.nextWorker) return this.nextWorker?.process(product);

    return product;
  }
}
