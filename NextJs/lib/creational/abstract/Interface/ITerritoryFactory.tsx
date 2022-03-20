import { ITerritory } from "./ITerritory";

export interface ITerritoryFactory {
    generateTerritory(): ITerritory
}