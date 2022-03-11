import { randomInt } from "crypto";

export default class Gateway {

    public Charge(value: number): boolean {
        return Boolean(randomInt(1))
    }
}