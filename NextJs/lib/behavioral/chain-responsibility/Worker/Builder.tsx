import { Product } from "../Product";
import { Worker } from "./Worker";

export class Builder extends Worker {
  process(product: Product): Product {
    if (!product.builded) product.builded = "Builded";
    if (this.nextWorker) return this.nextWorker?.process(product);

    return product;
  }
}
