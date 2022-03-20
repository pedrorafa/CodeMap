import { INpc } from "../../Interface/INpc";

export class WorkerMan implements INpc {
  dialogs: string[];
  hp: number;
  strength: number;
  clothes: string;

  constructor() {
    this.dialogs = ["Hi", "I'm going to work"];
    this.clothes = "Suit";
    this.strength = 3;
    this.hp = 50;
  }

  move(speed: number): string {
    if (speed >= 1) return "Walking";
    return "Stop";
  }
  name: string = "Joe";
  speak(): string {
    return this.dialogs.reduce((p, c) => `${p}. ${c}`);
  }
}
