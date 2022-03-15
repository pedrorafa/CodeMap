import IState from "./IState";

export default interface IContext {
  currentState: IState;
  previousState: IState;

  waitingPaymentState: IState;
  payedState: IState;
  cancelState: IState;
  sentState: IState;
}
