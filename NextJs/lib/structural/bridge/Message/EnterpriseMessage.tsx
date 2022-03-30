import { Message } from "./Message";

export class EnterpriseMessage extends Message {
  private _enterpriseName: string = "";
  public set enterpriseName(name: string) {
    this._enterpriseName = name;
  }
  send(): boolean {
    {
      if (!this._msg) throw new Error("Set email message to send");

      return this._channel.sendMessage(this._enterpriseName + " : " + this._msg);
    }
  }
}
