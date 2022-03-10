import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/common/footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Design Patterns</title>
        <meta name="description" content="Design Patterns" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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
      </main>
      <Footer />
    </div>
  );
};

export default Home;
