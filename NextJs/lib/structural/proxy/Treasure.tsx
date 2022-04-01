import { ITreasure } from "./Interfaces/ITreasure";

export class Treasure implements ITreasure {
  coins: number[] = [];
  spanTime: number = 5000;

  constructor() {
  }

  getCoin(): number {
    if (!this.coins.length) setTimeout(() => {
      this.coins = [1];
    }, 1000);

    return this.coins.pop() || 0;
  }
}
