import { UnsupportedOperationError } from "./Exceptions/UnsupportedOperationError";

export abstract class Component {
  constructor() {}

  add(component: Component): void {
    throw new UnsupportedOperationError();
  }
  remove(component: Component): void {
    throw new UnsupportedOperationError();
  }
  getLeaf(index: number): Component {
    throw new UnsupportedOperationError();
  }
  show(): string {
    throw new UnsupportedOperationError();
  }
  open(): string {
    throw new UnsupportedOperationError();
  }
}
