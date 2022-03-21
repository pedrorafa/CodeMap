import { Product } from "../Product";
import { Worker } from "./Worker";

export class Assembler extends Worker {
  process(product: Product): Product {
    if (!product.assembled) product.assembled = "Assembled";
    if (this.nextWorker) return this.nextWorker?.process(product);

    return product;
  }
}
