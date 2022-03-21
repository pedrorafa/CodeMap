import { House } from "./Entity/Building/House";
import { WorkerMan } from "./Entity/NPC/WorkerMan";
import { IBuilderTerritory } from "./Interface/IBuilderTerritory";
import { ITerritory } from "./Interface/ITerritory";

export class TerritoryBuilderDirector {
  protected builder: IBuilderTerritory;
  constructor(builder: IBuilderTerritory) {
    this.builder = builder;
  }

  public setTerritory(builder: IBuilderTerritory): void {
    this.builder = builder;
  }

  generateTerritory(size: number, population: number): ITerritory {
    this.builder.setSize(size);
    this.builder.setPopulation(population);
    this.builder.setArchitecture(population / 2);

    return this.builder.territory;
  }
  generateLonelyTerritory(size: number): ITerritory {
    this.builder.setSize(size);
    this.builder.setPopulation(1);
    return this.builder.territory;
  }
}
