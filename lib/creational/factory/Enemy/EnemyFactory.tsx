import { NpcFactory } from "../NpcFactory";
import { Npc } from "../Npc";
import { Wolf } from "./Wolf";

export abstract class EnemyFactory extends NpcFactory {
  protected abstract villager: Npc;

  create(level: number): Npc {
    this.villager = new Wolf();
    return this.villager;
  }
}
