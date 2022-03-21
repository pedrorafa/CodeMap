import type { NextPage } from "next";
import { useState } from "react";
import { Layout } from "../../../components/common";
import { Product } from "../../../lib/behavioral/chain-responsibility/Product";
import { WorkChain } from "../../../lib/behavioral/chain-responsibility/WorkChain";
import styles from "../../../styles/Home.module.css";

const workChain: WorkChain = new WorkChain();

const ChainResponsibilityPage: NextPage = () => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    let product = new Product();
    product.assembled = Boolean(e.currentTarget.value);
    product.builded = Boolean(e.currentTarget.value);
    product.painted = Boolean(e.currentTarget.value);
    product.delivered = Boolean(e.currentTarget.value);

    setRes(workChain.checkProduct(product));
  };

  const [res, setRes] = useState<boolean>();

  return (
    <Layout>
      <h1 className={styles.title}>Chain of Responsibility Pattern</h1>

      <div className={styles.description}>
        <p>{res}</p>
      </div>
      <input type="check" onChange={(e) => handleChange(e)} />
    </Layout>
  );
};

export default ChainResponsibilityPage;
