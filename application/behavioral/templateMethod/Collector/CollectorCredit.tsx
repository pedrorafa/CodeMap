import Collector from "../Collector";

export default class CollectorCredit extends Collector {
  protected Tax(): number {
    return this.value + 0.05;
  }
  Deduction(): number {
    if (this.value > 300) return this.value * 0.2;
    return 0;
  }
}
