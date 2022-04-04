import { IMemento } from "../Interface/IMemento";
import { IObject } from "../Interface/IObject";
import { Text } from "./Text";

export class TextMemento implements IMemento {

    private object: Text
    private content: string

    constructor(state: Text) {
        this.object = state
        this.content = state.content
    }

    restore(): void {
        this.object.content = this.content
    }
}