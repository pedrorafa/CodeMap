import { Npc } from "./Npc";

export abstract class NpcFactory {
  protected npc?: Npc;

  protected abstract create(level: number): Npc;

  spawn(level: number): Npc {
    this.npc = this.create(level);
    this.npc.level = level;

    return this.npc;
  }
}
