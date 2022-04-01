import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import { TreasureSecurityProxy } from "../../../lib/structural/proxy/Proxies/TreasureSecurityProxy";
import styles from "../../../styles/Home.module.css";

const treasure: TreasureSecurityProxy = new TreasureSecurityProxy();
treasure.createTreasure();
treasure.authenticate("secret-pass");
console.log(treasure.getCoin());

setTimeout(() => {
  treasure.authenticate("secret-pass");
  console.log(treasure.getCoin());
}, 5000)
const ProxyPage: NextPage = () => {

  return (
    <Layout>
      <h1 className={styles.title}>Proxy Pattern</h1>
      <div className={styles.description}>
        <p>Look console</p>
      </div>
    </Layout>
  );
};

export default ProxyPage;
