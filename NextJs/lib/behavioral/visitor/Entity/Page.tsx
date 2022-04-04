import { IVisitor } from "../Interface/IVisitor";
import { ComponentBook } from "./ComponentBook";

export class Page extends ComponentBook {
  private id: string;
  private text: string;

  constructor(id: string, text: string, pricePerPage: number) {
    super(pricePerPage);
    this.id = id;
    this.text = text;
  }

  accept(visitor: IVisitor) {
    return visitor.visitPage(this)
  }

  show(): string {
    return this.text;
  }
  open(): string {
    return this.text;
  }
}
