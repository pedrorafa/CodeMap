import { Wolf } from "../Entity/NPC/Wolf";
import { TreeHouse } from "../Entity/Building/TreeHouse";
import { Jungle } from "../Entity/Territory/Jungle";
import { IBuilderTerritory } from "../Interface/IBuilderTerritory";

export class JungleBuilder extends IBuilderTerritory {
  constructor() {
    super();
    this._territory = new Jungle();
  }

  setSize(size: number): void {
    this._territory.size = size;
    this._territory.buildings = [];
    this._territory.population = [];
  }
  setPopulation(population: number): void {
    while (population > 0) {
      this._territory.population.push(new Wolf());
      population--;
    }
  }
  setArchitecture(buildings: number): void {
    while (buildings > 0) {
      if (buildings % 2 || buildings == 1)
        this._territory.buildings.push(new TreeHouse());

      buildings--;
    }
  }
}
