export interface ICommand {
    execute(params: any): void
    undo(): void
}