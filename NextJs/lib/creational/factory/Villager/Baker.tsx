import { Npc } from "../Npc";
export class Baker extends Npc {
  constructor() {
    super();
    this.speak = "Baker";
    this.hostile = false;
  }
}
