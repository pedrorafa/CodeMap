import { ICommand } from "../ICommand";
import { TextEditor } from "../TextEditor";

export class InsertTextCommand implements ICommand {
  textEditor: TextEditor;

  constructor(textEditor: TextEditor) {
    this.textEditor = textEditor;
    this.textEditor.textHistory = [this.textEditor.text];
  }

  execute(insertText: string): void {
    this.textEditor.textHistory.push(this.textEditor.text);
    this.textEditor.text = insertText;

    console.log(this.textEditor.text);
  }
  undo(): void {
    this.textEditor.text =
      this.textEditor.textHistory.pop() || this.textEditor.text;
    console.log(this.textEditor.text);
  }
}
