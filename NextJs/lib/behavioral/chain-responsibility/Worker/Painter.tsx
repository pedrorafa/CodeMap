import { Product } from "../Product";
import { Worker } from "./Worker";

export class Painter extends Worker {
    check(product: Product): boolean {
        if (product.painted) return true;
        if (this.nextWorker) return this.nextWorker?.check(product);
    
        return false;
    }
}
