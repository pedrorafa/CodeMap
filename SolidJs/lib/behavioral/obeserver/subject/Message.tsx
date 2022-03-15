export default abstract class Message {
  private _message: string = "";

  public get message(): string {
    return this._message;
  }
  public set message(value: string) {
    this._message = value;
  }
}
