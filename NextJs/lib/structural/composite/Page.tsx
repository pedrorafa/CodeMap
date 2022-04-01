import { Component } from "./Component";

export class Page extends Component {
  private id: string;
  private text: string;

  constructor(id: string, text: string) {
    super();
    this.id = id;
    this.text = text;
  }

  show(): string {
    return this.text;
  }
  open(): string {
    return this.text;
  }
}
