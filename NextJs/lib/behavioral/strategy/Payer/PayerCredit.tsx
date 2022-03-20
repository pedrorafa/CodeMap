import { IPayer } from "./IPayer";

export class CreditPayer implements IPayer {

    private taxValue: number = 0.05

    public calcTax(orderValue: number): number {
        return  orderValue * this.taxValue;
    }
}