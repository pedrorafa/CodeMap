export default class Gateway {
  public Charge(value: number): boolean {
    return Boolean(Math.floor(Math.random() * 2));
  }
}
