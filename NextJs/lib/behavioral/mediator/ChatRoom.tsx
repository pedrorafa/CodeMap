import { IMediator } from "./Interface/IMediator";
import { IParticipant } from "./Interface/IParticipant";
import { Message } from "./Message";
import { ChatBot } from "./Participant/ChatBot";

export class ChatRoom implements IMediator {
    participants: IParticipant[];
    moderator: ChatBot
    constructor(chatBotModerator: ChatBot) {
        this.participants = []
        this.moderator = chatBotModerator
    }

    act(req: Message): string {
        if (!this.moderator.validateUser(req.sender)) return `Blocked message from: ${req.sender.id}`

        return `${req.sender.id}: ${req.msg}`
    }
    addParticipant(participant: IParticipant) {
        this.participants.push(participant)
    }
    removeParticipant(participant: IParticipant) {
        this.participants = this.participants.filter(p => p != participant)
    }
}