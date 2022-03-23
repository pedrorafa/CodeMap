import type { NextPage } from "next";
import { useState } from "react";
import { Layout } from "../../../components/common";
import { List } from "../../../lib/behavioral/iterator/List";
import styles from "../../../styles/Home.module.css";

const list: List = new List();
list.forEach((i: any) => {
  console.log(i);
});

const IteratorPage: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Iterator Pattern</h1>

      <div className={styles.description}></div>
    </Layout>
  );
};

export default IteratorPage;
