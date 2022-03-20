import { Npc } from "../Npc";
export class Carpenter extends Npc {
  constructor() {
    super();
    this.speak = "Carpenter";
    this.hostile = true;
  }
}
