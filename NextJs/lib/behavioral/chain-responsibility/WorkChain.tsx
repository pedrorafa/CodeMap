import { Product } from "./Product";
import { Assembler } from "./Worker/Assembler";
import { Builder } from "./Worker/Builder";
import { Deliverer } from "./Worker/Deliverer";
import { Painter } from "./Worker/Painter";

export class WorkChain {
  private product?: Product;

  private assembler: Assembler = new Assembler();
  private builder: Builder = new Builder();
  private painter: Painter = new Painter();
  private deliverer: Deliverer = new Deliverer();

  constructor() {
      this.assembler.setNextWorker(this.builder)
      this.builder.setNextWorker(this.painter)
      this.painter.setNextWorker(this.deliverer)
  }

  public checkProduct(product: Product): boolean {
    return this.assembler.check(product);
  }
}
