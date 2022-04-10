import { IMediator } from "./IMediator";

export interface IParticipant {
    id: string
    mediator?: IMediator
    act(params: any): any
    setMediator(mediator: IMediator): void
}