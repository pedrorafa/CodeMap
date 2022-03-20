import Collector from "../Collector";

export default class CollectorDebit extends Collector {
  protected Tax(): number {
    return 4;
  }
  Deduction(): number {
    return this.value * 0.5;
  }
}
