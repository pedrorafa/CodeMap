import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import { CheckOutFacade } from "../../../lib/structural/facade/CheckOutFacade";
import { Client } from "../../../lib/structural/facade/Client";
import { Product } from "../../../lib/structural/facade/Product";
import { Order } from "../../../lib/structural/facade/Service/Order";
import styles from "../../../styles/Home.module.css";

const client = new Client("Jacqueline", "joy@gmail.com", 100);
const order = new Order(client);

const checkout = new CheckOutFacade(order);

order.addProduct(new Product(10, "Pão de queijo", "pão com queijo"));

const FacadePage: NextPage = () => {
  useEffect(() => {}, []);

  return (
    <Layout>
      <h1 className={styles.title}>Facade Pattern</h1>
      <div className={styles.description}>
        <button
          className={styles.button}
          onClick={() => {
            if (checkout.payWithCredit()) alert("Pay With Credit");
          }}
        >
          Pay With Credit
        </button>
        <button
          className={styles.button}
          onClick={() => {
            if (checkout.payWithDebit()) alert("Pay With Debit");
          }}
        >
          Pay With Debit
        </button>
        <button
          className={styles.button}
          onClick={() => {
            if (checkout.payWithDebit()) alert("Pay With Ticket");
          }}
        >
          Pay With Ticket
        </button>
      </div>
    </Layout>
  );
};

export default FacadePage;
