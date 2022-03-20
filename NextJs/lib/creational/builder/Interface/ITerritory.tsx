import { IBuilding } from "./IBuilding";
import { INpc } from "./INpc";

export interface ITerritory {
  size: number;
  buildings: IBuilding[];
  population: INpc[];
}
