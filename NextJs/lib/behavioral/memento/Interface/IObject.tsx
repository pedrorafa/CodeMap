import { IMemento } from "./IMemento"

export interface IObject {
    save(): IMemento
}