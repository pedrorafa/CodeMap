import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CreditPayer } from "../../../application/behavioral/strategy/CreditPayer";
import { Order } from "../../../application/behavioral/strategy/Order";
import { TicketPayer } from "../../../application/behavioral/strategy/TicketPayer";
import styles from "../../../styles/Home.module.css";

const Home: NextPage = () => {
  const creditPayer = new CreditPayer();
  const ticketPayer = new TicketPayer();
  const order = new Order();

  const [payerMethod, setPayerMethod] = useState(0);
  const [orderValue, setOrderValues] = useState(100);
  const [taxValue, setTaxValue] = useState(order.calcTax());
  order.setValue(100);

  const handlePayerChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPayerMethod(Number(e.currentTarget.value));
  };

  useEffect(() => {
    if (payerMethod) order.setPayerMethod(ticketPayer);
    else order.setPayerMethod(creditPayer);

    setTaxValue(order.calcTax());
  }, [payerMethod]);

  useEffect(() => {
    order.setValue(orderValue);
  }, [orderValue]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Strategy Pattern" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Strategy Pattern</h1>

        <div className={styles.description}>
          <p>Order:{orderValue}</p>
          <p>Tax:{taxValue}</p>
        </div>
        
        <div className="radio-buttons">
          Credit
          <input
            id="creditPayer"
            value="0"
            checked={payerMethod == 0}
            name="platform"
            type="radio"
            onChange={(e) => handlePayerChange(e)}
          />
          Ticket
          <input
            id="ticketPayer"
            value="1"
            checked={payerMethod == 1}
            name="payer"
            type="radio"
            onChange={(e) => handlePayerChange(e)}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
