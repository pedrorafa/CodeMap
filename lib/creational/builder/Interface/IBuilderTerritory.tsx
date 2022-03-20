import { ITerritory } from "./ITerritory";

export abstract class IBuilderTerritory {
  abstract setSize(size: number): void;
  abstract setPopulation(population: number): void;
  abstract setArchitecture(buildings: number): void;

  protected _territory: ITerritory;
  public get territory(): ITerritory {
    return this._territory;
  }
}
