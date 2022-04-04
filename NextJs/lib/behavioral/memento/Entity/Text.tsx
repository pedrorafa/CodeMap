import { IMemento } from "../Interface/IMemento";
import { IObject } from "../Interface/IObject";
import { TextMemento } from "./TextMemento";

export class Text implements IObject {

    constructor() {
        this._content = ''
    }

    private _content: string
    public get content(): string {
        return this._content
    }
    public set content(v: string) {
        this._content = v;
    }

    save(): TextMemento {
        return new TextMemento(this)
    }
}