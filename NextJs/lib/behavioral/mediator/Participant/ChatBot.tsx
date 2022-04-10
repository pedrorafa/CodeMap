import { IMediator } from "../Interface/IMediator";
import { IParticipant } from "../Interface/IParticipant";

export class ChatBot implements IParticipant {
    mediator?: IMediator;
    lastUser?: IParticipant
    id: string;

    constructor(name: string) {
        this.mediator = undefined
        this.id = name
    }
    setMediator(mediator: IMediator): void {
        this.mediator = mediator
    }

    act(msg: string): string {
        if (this.mediator)
            return this.mediator.act(msg)
        return "This chatbot has no room"
    }

    validateUser(user: IParticipant) {
        let res = this.lastUser !== user
        this.lastUser = user
        return res
    }

}