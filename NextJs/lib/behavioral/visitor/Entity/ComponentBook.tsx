import { UnsupportedOperationError } from "../Exceptions/UnsupportedOperationError";
import { IComponent } from "../Interface/IComponent";
import { IVisitor } from "../Interface/IVisitor";

export abstract class ComponentBook implements IComponent {
  constructor(price: number) {
    this.price = price
  }

  public price: number = 0

  accept(visitor: IVisitor) {
    return;
  }

  add(component: ComponentBook): void {
    throw new UnsupportedOperationError();
  }
  remove(component: ComponentBook): void {
    throw new UnsupportedOperationError();
  }
  getLeaf(index: number): ComponentBook {
    throw new UnsupportedOperationError();
  }
  show(): string {
    throw new UnsupportedOperationError();
  }
  open(): string {
    throw new UnsupportedOperationError();
  }
}
