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

order.addProduct(new Product(10, 'Pão de queijo', 'pão com queijo'))

checkout.payWithCredit();
checkout.payWithDebit();
checkout.payWithTicket();

const FacadePage: NextPage = () => {
  useEffect(() => {}, []);

  return (
    <Layout>
      <h1 className={styles.title}>Facade Pattern</h1>
      <div className={styles.description}>{}</div>
    </Layout>
  );
};

export default FacadePage;
