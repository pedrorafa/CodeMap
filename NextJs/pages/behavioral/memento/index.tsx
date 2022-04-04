import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import { TextEditor } from "../../../lib/behavioral/memento/TextEditor";
import styles from "../../../styles/Home.module.css";

const textEditor: TextEditor = new TextEditor();

const MementoPage: NextPage = () => {

  const [text, setText] = useState(textEditor.text.content)

  return (
    <Layout>
      <h1 className={styles.title}>Memento Pattern</h1>
      <div className={styles.description}>{text}</div>
      <input
        type="text"
        onChange={(e) => {
          textEditor.checkPoint()
          textEditor.text.content = e.currentTarget.value;
          setText(textEditor.text.content)
        }}
      />
      <button onClick={() => {
        textEditor.undo()
        setText(textEditor.text.content)
      }}>undo</button>
    </Layout>
  );
};

export default MementoPage;
