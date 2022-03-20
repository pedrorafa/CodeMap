import { IBuilding } from "../../interface/IBuilding";
import { INpc } from "../../interface/INpc";
import { ITerritory } from "../../interface/ITerritory";

export class Jungle implements ITerritory{
    size: number;
    buildings: IBuilding[] = [];
    population: INpc[] = [];
}