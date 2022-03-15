import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Collector from "../../../lib/behavioral/templateMethod/Collector";
import CollectorCredit from "../../../lib/behavioral/templateMethod/Collector/CollectorCredit";
import Gateway from "../../../lib/behavioral/templateMethod/Gateway";
import { Layout } from "../../../components/common";
import styles from "../../../styles/Home.module.css";

const gateway = new Gateway()
const collector: Collector = new CollectorCredit(gateway);

const TemplateMethodPage: NextPage = () => {

  const [orderValue, setOrderValue] = useState(100);
  const [chargeValue, setChargeValue] = useState(collector.Charge());

  const handleOrderValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    setOrderValue(Number(e.currentTarget.value));
  };

  useEffect(() => {
    collector.value = orderValue
    setChargeValue(collector.Charge());
  }, [orderValue]);


  return (
    <Layout>
      <h1 className={styles.title}>Template Method Pattern</h1>

      <div className={styles.description}>
        <p>Order: {orderValue}</p>
        <p>Charge Result: {chargeValue ? 'Pago' : 'Erro'}</p>
      </div>
      <input type="number" onChange={(e) => handleOrderValueChange(e)} />
    </Layout>
  );
};

export default TemplateMethodPage;
