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
        <code className={styles.code}>Behavioral</code>
      </p>

      <div className={styles.grid}>
        <Link href={"behavioral/strategy"}>
          <div className={styles.card}>
            <h2>Strategy</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"behavioral/templateMethod"}>
          <div className={styles.card}>
            <h2>Template Method</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"behavioral/observer"}>
          <div className={styles.card}>
            <h2>Observer</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"behavioral/state"}>
          <div className={styles.card}>
            <h2>State</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"behavioral/chainResponsibility"}>
          <div className={styles.card}>
            <h2>Chain of Responsibility</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"behavioral/iterator"}>
          <div className={styles.card}>
            <h2>Iterator</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"behavioral/command"}>
          <div className={styles.card}>
            <h2>Command</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
      </div>

      <p className={styles.description}>
        <code className={styles.code}>Structural</code>
      </p>
      <div className={styles.grid}>
        <Link href={"structural/adapter"}>
          <div className={styles.card}>
            <h2>Adapter</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"structural/decorator"}>
          <div className={styles.card}>
            <h2>Decorator</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"structural/facade"}>
          <div className={styles.card}>
            <h2>Facade</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"structural/bridge"}>
          <div className={styles.card}>
            <h2>Bridge</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"structural/proxy"}>
          <div className={styles.card}>
            <h2>Proxy</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"structural/composite"}>
          <div className={styles.card}>
            <h2>Composite</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
      </div>

      <p className={styles.description}>
        <code className={styles.code}>Creational</code>
      </p>
      <div className={styles.grid}>
        <Link href={"creational/factory"}>
          <div className={styles.card}>
            <h2>Factory</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"creational/abstract"}>
          <div className={styles.card}>
            <h2>Abstract</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
        <Link href={"creational/builder"}>
          <div className={styles.card}>
            <h2>Builder</h2>
            <p>Learn this Pattern</p>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
