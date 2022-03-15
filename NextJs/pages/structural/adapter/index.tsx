import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import styles from "../../../styles/Home.module.css";
import { Charge } from "../../../lib/structural/adapter/Charge";
import { EasyPayAdapter } from "../../../lib/structural/adapter/Adapter/EasyPayAdapter";
import { TopPayer } from "../../../lib/structural/adapter/Adapted/TopPayer";
import { TopPayerAdapter } from "../../../lib/structural/adapter/Adapter/TopPayerAdapter";

const easyPayAdapter = new EasyPayAdapter();
const topPayer = new TopPayer();
const topPayerAdapter = new TopPayerAdapter(topPayer);

const order = new Charge(easyPayAdapter);

const AdapterPage: NextPage = () => {
  const [payerMethod, setPayerMethod] = useState<number>(0);

  const [chargeValue, setChargeValue] = useState(0);
  const [chargeAmounts, setChargeAmounts] = useState(0);
  const [card, setCard] = useState("");
  const [cvv, setCvv] = useState(0);

  const [charge, setCharge] = useState(false);

  const handlePayerChange = (e: React.FormEvent<HTMLInputElement>) => {
    let payer = Number(e.currentTarget.value);
    if (!!payer) order.gateway = easyPayAdapter;
    else order.gateway = topPayerAdapter;

    setPayerMethod(payer);
  };

  useEffect(() => {
    loadCharge();
    setCharge(order.payCharge());
  }, [payerMethod]);

  const loadCharge = () => {
    order.value = chargeValue;
    order.amounts = chargeAmounts;
    order.card = card;
    order.cvv = cvv;
  };

  const renderOptions = () => {
    return (
      <div className="radio-buttons">
        TopPayer
        <input
          id="TopPayer"
          value={0}
          checked={payerMethod === 0}
          name="platform"
          type="radio"
          onChange={(e) => handlePayerChange(e)}
        />
        EasyPay
        <input
          id="EasyPay"
          value={1}
          checked={payerMethod === 1}
          name="platform"
          type="radio"
          onChange={(e) => handlePayerChange(e)}
        />
      </div>
    );
  };

  return (
    <Layout>
      <h1 className={styles.title}>Adapter Pattern</h1>
      <div className={styles.description}>
        <p>Payment Status: {charge ? 'Pago' : 'Error'}</p>
        <p>Charge: {chargeValue}</p>
      </div>
      Value:
      <input
        type="number"
        onChange={(e) => setChargeValue(Number(e.currentTarget.value))}
      />
      Amounts
      <input
        type="number"
        onChange={(e) => setChargeAmounts(Number(e.currentTarget.value))}
      />
      Card
      <input type="text" onChange={(e) => setCard(e.currentTarget.value)} />
      CVV
      <input
        type="text"
        onChange={(e) => setCvv(Number(e.currentTarget.value))}
      />
      {renderOptions()}
    </Layout>
  );
};

export default AdapterPage;
