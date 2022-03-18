import { Npc } from "./Npc";

export abstract class NpcFactory {
  abstract create(level: number): Npc

  spawn(level: number): Npc {
    return this.create(level);
  }
}
