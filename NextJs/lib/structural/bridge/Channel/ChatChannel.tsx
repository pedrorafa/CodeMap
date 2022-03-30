import { IChannel } from "./IChannel";

export class ChatChannel implements IChannel{
    sendMessage(msg: string): boolean {
        console.log('You: ' + msg)
        return true;
    }
}