import Collector from "../Collector";

export default class CollectorDebit extends Collector {
  Deduction(): number {
    return this.value * 0.1;
  }
}
