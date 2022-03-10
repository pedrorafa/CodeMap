import { IPayer } from "./IPayer";

export class TicketPayer implements IPayer {
    
    private taxValue: number = 0.01

    public calcTax(orderValue: number): number {
        return orderValue * this.taxValue;
    }
}