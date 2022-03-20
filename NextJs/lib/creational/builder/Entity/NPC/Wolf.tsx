import { INpc } from "../../Interface/INpc";

export class Wolf implements INpc {
  dialogs: string[];
  hp: number;
  strength: number;
  clothes: string;

  constructor(){
    this.clothes = "none";
    this.dialogs = [];
    this.strength = 3;
    this.hp = 10;
  }

  move(speed: number): string {
    if (speed >= 3) return "Running";
    if (speed >= 2) return "Walking";
    if (speed >= 1) return "Lazy Walking";
    return "Stop";
  }
  name: string = "Wolf";
  speak(): string {
    return "Haw";
  }
}
