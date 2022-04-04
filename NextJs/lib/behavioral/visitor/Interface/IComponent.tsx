import { IVisitor } from "./IVisitor";

export interface IComponent {
    accept(visitor: IVisitor): any
}