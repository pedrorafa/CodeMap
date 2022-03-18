import { INpc } from "../Interface/INpc";

export class Wolf implements INpc {
  name: string = "Wolf";
  speak(): string {
    return "Haw";
  }
}
