import { ComponentBook } from "./ComponentBook";

export class Chapter extends ComponentBook {
  private pages: ComponentBook[] = [];
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  add(component: ComponentBook): void {
    this.pages.push(component);
  }
  remove(component: ComponentBook): void {
    this.pages = this.pages.filter((c) => c != component);
  }
  getLeaf(index: number): ComponentBook {
    return this.pages[index];
  }

  show(): string {
    return this.name + "<br>" + this.pages.map((c) => c.show() + "<br>");
  }
  open(): string {
    return this.name;
  }
}
