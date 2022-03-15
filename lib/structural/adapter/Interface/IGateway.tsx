export interface IGateway {
    setValue(value: number): void
    setAmounts(amounts: number): void
    setCard(card: string): void
    setCVV(cvv: number): void
    validateCard(): boolean
    pay(): boolean
}