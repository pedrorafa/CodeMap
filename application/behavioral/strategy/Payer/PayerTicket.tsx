import { IPayer } from "./IPayer";

export class TicketPayer implements IPayer {
    public calcTax(orderValue: number): number {
        return 0;
    }
}