import { Text } from "./Entity/Text";
import { TextMemento } from "./Entity/TextMemento";

export class TextEditor {
    public text: Text
    private history: TextMemento[]

    constructor() {
        this.text = new Text()
        this.history = []
    }

    public checkPoint() {
        if (this.history.length > 10)
            this.history = this.history.slice(1)
        this.history.push(this.text.save())
    }
    public undo() {
        if (!!this.history.length)
            this.history.pop()?.restore()
    }
}