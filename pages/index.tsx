import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "../components/common";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
      <Layout>
        <h1 className={styles.title}>
          Let learn Design Patterns in <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Patterns List</code>
        </p>

        <div className={styles.grid}>
          <Link href={"behavioral/strategy"}>
            <div className={styles.card}>
              <h2>Strategy</h2>
              <p>Learn this Pattern</p>
            </div>
          </Link>
        </div>
      </Layout>
  );
};

export default Home;
