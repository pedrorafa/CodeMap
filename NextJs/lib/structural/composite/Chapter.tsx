import { Component } from "./Component";

export class Chapter extends Component {
  private pages: Component[] = [];
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  add(component: Component): void {
    this.pages.push(component);
  }
  remove(component: Component): void {
    this.pages = this.pages.filter((c) => c != component);
  }
  getLeaf(index: number): Component {
    return this.pages[index];
  }

  show(): string {
    return this.name + "<br>" + this.pages.map((c) => c.show() + "<br>");
  }
  open(): string {
    return this.name;
  }
}
