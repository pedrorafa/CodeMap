import { IChannel } from "../Channel/IChannel";

export abstract class Message {
  protected _channel: IChannel;

  protected _msg: string = "";
  public set msg(v: string) {
    this._msg = v;
  }

  public set channel(channel: IChannel) {
    this._channel = channel;
  }

  constructor(channel: IChannel) {
    this._channel = channel;
  }

  abstract send(): boolean;
}
