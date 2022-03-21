import { Product } from "../Product";
import { Worker } from "./Worker";

export class Painter extends Worker {
  process(product: Product): Product {
    if (!product.painted) product.painted = "Painted";
    if (this.nextWorker) return this.nextWorker?.process(product);

    return product;
  }
}
