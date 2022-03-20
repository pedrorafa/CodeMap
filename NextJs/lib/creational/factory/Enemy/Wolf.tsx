import { Npc } from "../Npc";
export class Wolf extends Npc {
  constructor() {
    super();
    this.speak = "Wolf";
    this.hostile = true;
  }
}
