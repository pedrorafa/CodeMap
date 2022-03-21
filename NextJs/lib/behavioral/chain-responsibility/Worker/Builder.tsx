import { Product } from "../Product";
import { Worker } from "./Worker";

export class Builder extends Worker {
    check(product: Product): boolean {
        if (product.assembled) return true;
        if (this.nextWorker) return this.nextWorker?.check(product);
    
        return false;
    }
}
