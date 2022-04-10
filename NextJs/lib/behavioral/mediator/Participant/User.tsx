import { IMediator } from "../Interface/IMediator";
import { IParticipant } from "../Interface/IParticipant";
import { Message } from "../Message";

export class User implements IParticipant {
    mediator: IMediator;
    id: string;

    constructor(mediator: IMediator, name: string) {
        this.mediator = mediator
        this.id = name
    }
    setMediator(mediator: IMediator): void {
        this.mediator = mediator
    }

    act(msg: string): string {
      return  this.mediator.act(new Message(this, msg))
    }

}