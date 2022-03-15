import IContext from "./IContext";

export default interface IState {
  context: IContext;
  description: string;

  pay(): void;
  cancel(): void;
  send(): void;
}
