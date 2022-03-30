import { Message } from "./Message";

export class ClientMessage extends Message{
    send(): boolean {{
        if (!this._msg) throw new Error("Set email message to send");
    
        return this._channel.sendMessage(this._msg);
      }
    }

}