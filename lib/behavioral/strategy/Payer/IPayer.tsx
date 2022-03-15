export interface IPayer {
  calcTax(orderValue: number): number;
}

export enum ETypePayer {
    Ticket,    
    Debit,    
    Credit,
}
