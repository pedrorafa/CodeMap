import { ITreasure } from "../Interfaces/ITreasure";
import { Treasure } from "../Treasure";

export class TreasureSecurityProxy implements ITreasure {
  private treasure?: ITreasure;
  private authenticated: boolean = false;
  private secret: string = "secret-pass";

  constructor() {}

  createTreasure(): void {
    if (!this.treasure) this.treasure = new Treasure();
  }

  authenticate(password: string) {
    this.authenticated = password === this.secret;
  }

  getCoin(): number {
    if (!this.authenticated) throw new Error("You not authenticated");

    this.createTreasure();
    this.authenticated = false;

    if (this.treasure) return this.treasure.getCoin();
    return 0;
  }
}
