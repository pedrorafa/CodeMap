import { City } from "../Entity/Territory/City";
import { IBuilderTerritory } from "../Interface/IBuilderTerritory";
import { House } from "../Entity/Building/House";
import { WorkerMan } from "../Entity/NPC/WorkerMan";

export class CityBuilder extends IBuilderTerritory {
  constructor() {
    super();
    this._territory = new City();
  }
  setSize(size: number): void {
    this._territory.size = size;
    this._territory.buildings = [];
    this._territory.population = [];
  }
  setPopulation(population: number): void {
    while (population > 0) {
      this._territory.population.push(new WorkerMan());
      population--;
    }
  }
  setArchitecture(buildings: number): void {
    while (buildings > 0) {
      this._territory.buildings.push(new House());

      buildings--;
    }
  }
}
