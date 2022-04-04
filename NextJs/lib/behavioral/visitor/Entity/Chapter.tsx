import { IVisitor } from "../Interface/IVisitor";
import { ComponentBook } from "./ComponentBook";

export class Chapter extends ComponentBook {
  private _pages: ComponentBook[] = [];
  private name: string;

  constructor(name: string, pricePerChapter: number) {
    super(pricePerChapter);
    this.name = name;
  }

  accept(visitor: IVisitor): number {
    return visitor.visitChapter(this)
  }

  add(component: ComponentBook): void {
    this._pages.push(component);
  }
  remove(component: ComponentBook): void {
    this._pages = this._pages.filter((c) => c != component);
  }

  public get pages(): ComponentBook[] {
    return this._pages
  }

  show(): string {
    return this.name + "<br>" + this._pages.map((c) => c.show() + "<br>");
  }
  open(): string {
    return this.name;
  }
}
