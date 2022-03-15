import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ETypePayer } from "../../../lib/behavioral/strategy/Payer/IPayer";
import { Order } from "../../../lib/behavioral/strategy/Order";
import { Layout } from "../../../components/common";
import styles from "../../../styles/Home.module.css";

const order = new Order();

const StrategyPage: NextPage = () => {
  const [payerMethod, setPayerMethod] = useState<ETypePayer>();
  const [orderValue, setOrderValue] = useState(100);
  const [taxValue, setTaxValue] = useState(0);

  const handlePayerChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPayerMethod(Number(e.currentTarget.value));
  };
  const handleOrderValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    setOrderValue(Number(e.currentTarget.value));
  };

  useEffect(() => {
    calcOrder();
    setTaxValue(order.calcTax());
  }, [payerMethod]);

  useEffect(() => {
    calcOrder();
    setTaxValue(order.calcTax());
  }, [orderValue]);

  const calcOrder = () => {
    order.setPayerMethod(payerMethod ?? ETypePayer.Debit);
    order.value = orderValue;
  };

  const renderOptions = () => {
    return Object.keys(ETypePayer)
      .filter((e) => isNaN(Number(e)))
      .map((payerType) => {
        let type: ETypePayer = ETypePayer[payerType as keyof typeof ETypePayer];

        return (
          <div>
            {payerType}
            <input
              id={`${payerType}Payer`}
              value={type}
              checked={payerMethod === type}
              name="platform"
              type="radio"
              onChange={(e) => handlePayerChange(e)}
            />
          </div>
        );
      });
  };

  return (
    <Layout>
      <h1 className={styles.title}>Strategy Pattern</h1>

      <div className={styles.description}>
        <p>Order:{orderValue}</p>
        <p>Tax:{taxValue}</p>
      </div>
      <input type="number" onChange={(e) => handleOrderValueChange(e)} />
      <div className="radio-buttons">{renderOptions()}</div>
    </Layout>
  );
};

export default StrategyPage;
