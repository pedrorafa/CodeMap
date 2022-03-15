import type { NextPage } from "next";
import { useState } from "react";
import { Layout } from "../../../components/common";
import Order from "../../../lib/behavioral/state/Order";
import styles from "../../../styles/Home.module.css";

let order = new Order();

const StatePage: NextPage = () => {
  const [current, setCurrent] = useState<string>();
  const [previous, setPrevious] = useState<string>();

  const setDescription = () => {
    setCurrent(order.currentState.description);
    setPrevious(order.previousState.description);
  };

  const setNewOrder = () => {
    order = new Order();
    setDescription();
  };

  return (
    <Layout>
      <h1 className={styles.title}>State Pattern</h1>

      <div className={styles.description}>
        <p>Previous State: {previous}</p>
        <p>Current State: {current}</p>

        <button
          className={styles.button}
          onClick={() => {
            setNewOrder();
          }}
        >
          Novo Pedido
        </button>
        <button
          className={styles.button}
          onClick={() => {
            order.payOrder();
            setDescription();
          }}
        >
          Pagar
        </button>
        <button
          className={styles.button}
          onClick={() => {
            order.cancelOrder();
            setDescription();
          }}
        >
          Cancelar
        </button>
        <button
          className={styles.button}
          onClick={() => {
            order.sendOrder();
            setDescription();
          }}
        >
          Enviar
        </button>
      </div>
    </Layout>
  );
};

export default StatePage;
