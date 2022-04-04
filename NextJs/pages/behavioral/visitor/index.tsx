import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import { Chapter } from "../../../lib/behavioral/visitor/Entity/Chapter";
import { Page } from "../../../lib/behavioral/visitor/Entity/Page";
import { VisitorPricing } from "../../../lib/behavioral/visitor/Visitor/VisitorPricing";
import styles from "../../../styles/Home.module.css";

const root: Chapter = new Chapter("Root", 1);
const book: Chapter = new Chapter("Book 1", 1);
book.add(new Page("1", "Text 1", 0.1));
book.add(new Page("2", "Text 2", 0.1));
book.add(new Page("3", "Text 3", 0.1));
const book2: Chapter = new Chapter("Book 2", 2);
book2.add(new Page("4", "Text 4", 0.1));
const book2_1: Chapter = new Chapter("Book 2-1", 2);
book2_1.add(new Page("4.1", "Text 4.1", 0.1));

book2.add(book2_1);

root.add(book);
root.add(book2);

const VisitorPage: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Visitor Pattern</h1>
      <div className={styles.description}>
        <div>
          {root.accept(new VisitorPricing())}
        </div>
      </div>
    </Layout>
  );
};

export default VisitorPage;
