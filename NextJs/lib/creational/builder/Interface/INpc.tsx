export interface INpc {
  name: string;
  dialogs: string[];
  hp: number;
  strength: number;
  clothes: string;
  speak(): string;
  move(speed: number): string;
}
