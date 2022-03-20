import { INpc } from "../Interface/INpc";

export class Baker implements INpc {
  name: string = "Baker";
  speak(): string {
    return "Get some bread!";
  }
}
