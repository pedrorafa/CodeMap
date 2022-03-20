import { House } from "../Building/House";
import { ITerritory } from "../interface/ITerritory";
import { ITerritoryFactory } from "../interface/ITerritoryFactory";
import { Baker } from "../Npc/Baker";
import { City } from "../Territory/City";

export class CityFactory implements ITerritoryFactory {
  generateTerritory(): ITerritory {
    let city = new City();
    city.buildings = [new House()];
    city.population = [new Baker(), new Baker()];
    return city;
  }
}
