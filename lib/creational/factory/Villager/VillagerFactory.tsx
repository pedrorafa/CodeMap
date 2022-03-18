import { NpcFactory } from "../NpcFactory";
import { Npc } from "../Npc";
import { Carpenter } from "./Carpenter";
import { Baker } from "./Baker";

export abstract class VillagerFactory extends NpcFactory {
  protected abstract villager: Npc;

  create(level: number): Npc {
    if (level <= 1) this.villager = new Baker();
    else this.villager = new Carpenter();

    this.villager.level = level;

    return this.villager;
  }
}
