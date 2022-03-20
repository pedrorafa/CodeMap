import { NpcFactory } from "../NpcFactory";
import { Npc } from "../Npc";
import { Carpenter } from "./Carpenter";
import { Baker } from "./Baker";

export class VillagerFactory extends NpcFactory {
  create(level: number): Npc {
    if (level <= 1) return new Baker();
    else return new Carpenter();
  }
}
