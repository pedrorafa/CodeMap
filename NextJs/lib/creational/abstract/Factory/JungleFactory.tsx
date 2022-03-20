import { TreeHouse } from "../Building/TreeHouse";
import { ITerritory } from "../interface/ITerritory";
import { ITerritoryFactory } from "../interface/ITerritoryFactory";
import { Wolf } from "../Npc/Wolf";
import { Jungle } from "../Territory/Jungle";

export class JungleFactory implements ITerritoryFactory {
  generateTerritory(): ITerritory {
    let jungle = new Jungle();
    jungle.buildings = [new TreeHouse()];
    jungle.population = [new Wolf(), new Wolf(), new Wolf()];
    return jungle;
  }
}
