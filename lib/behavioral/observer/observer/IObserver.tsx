export default interface IObserver {
    id: string
    update(message: any): void
}
