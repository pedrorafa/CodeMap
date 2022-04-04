import { UnsupportedOperationError } from "./Exceptions/UnsupportedOperationError";

export abstract class ComponentBook {
  constructor() {}

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
