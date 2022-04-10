import { IParticipant } from "./Interface/IParticipant";

export class Message {
    sender: IParticipant
    msg: string

    constructor(sender: IParticipant, msg: string){
        this.sender = sender
        this.msg = msg
    }
}