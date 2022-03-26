import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import { InsertTextCommand } from "../../../lib/behavioral/command/Commands/InsertTextCommand";
import { TextEditor } from "../../../lib/behavioral/command/TextEditor";
import styles from "../../../styles/Home.module.css";

const textEditor: TextEditor = new TextEditor();
const insertCommand: InsertTextCommand = new InsertTextCommand(textEditor);

const CommandPage: NextPage = () => {
  
  return (
    <Layout>
      <h1 className={styles.title}>Command Pattern</h1>

      <div className={styles.description}>{textEditor.text}</div>
      <input
        type="text"
        onChange={(e) => {
          insertCommand.execute(e.currentTarget.value);
        }}
      />
      <button onClick={() => insertCommand.undo()}>undo</button>
    </Layout>
  );
};

export default CommandPage;
