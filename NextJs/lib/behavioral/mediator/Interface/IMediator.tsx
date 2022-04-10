import { IParticipant } from "./IParticipant"

export interface IMediator {
    participants: IParticipant[]
    act(params: any): any
    addParticipant(participant: IParticipant): any
    removeParticipant(participant: IParticipant): any
}