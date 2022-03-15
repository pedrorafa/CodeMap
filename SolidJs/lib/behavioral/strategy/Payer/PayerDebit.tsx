import { IPayer } from "./IPayer";

export class DebitPayer implements IPayer {
    
    private taxValue: number = 4

    public calcTax(orderValue: number): number {
        return this.taxValue;
    }
}