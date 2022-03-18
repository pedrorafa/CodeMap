import { NpcFactory } from "../NpcFactory";
import { Npc } from "../Npc";
import { Wolf } from "./Wolf";

export class EnemyFactory extends NpcFactory {
  create(level: number): Npc {
    return new Wolf();
  }
}
