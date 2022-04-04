import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import { Chapter } from "../../../lib/structural/composite/Chapter";
import { Page } from "../../../lib/structural/composite/Page";
import styles from "../../../styles/Home.module.css";

const root: Chapter = new Chapter("Root");
const book: Chapter = new Chapter("Book 1");
book.add(new Page("1", "Text 1"));
book.add(new Page("2", "Text 2"));
book.add(new Page("3", "Text 3"));
const book2: Chapter = new Chapter("Book 2");
book2.add(new Page("4", "Text 4"));
const book2_1: Chapter = new Chapter("Book 2-1");
book2_1.add(new Page("4.1", "Text 4.1"));

book2.add(book2_1);

root.add(book);
root.add(book2);

const CompositePage: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Composite Pattern</h1>
      <div className={styles.description}>
        <div dangerouslySetInnerHTML={{ __html: root.show() }}></div>
      </div>
    </Layout>
  );
};

export default CompositePage;
