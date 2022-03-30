import { IChannel } from "./IChannel";

export class EmailChannel implements IChannel{
    sendMessage(msg: string): boolean {
        console.log('E-mail: ' + msg)
        return true;
    }
}