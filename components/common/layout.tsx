import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
import Footer from "./footer";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Design Patterns</title>
        <meta name="description" content="Design Patterns" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={"/"}>
        <h4>Home</h4>
      </Link>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
