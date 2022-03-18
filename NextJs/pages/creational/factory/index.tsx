import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import { EnemyFactory } from "../../../lib/creational/factory/Enemy/EnemyFactory";
import { VillagerFactory } from "../../../lib/creational/factory/Villager/VillagerFactory";
import styles from "../../../styles/Home.module.css";

const enemyFactory: EnemyFactory = new EnemyFactory();
const vilaggerFactory: VillagerFactory = new VillagerFactory();

const FactoryPage: NextPage = () => {
  useEffect(() => {}, []);

  return (
    <Layout>
      <h1 className={styles.title}>Factory Pattern</h1>
      <div className={styles.description}>
        <button
          className={styles.button}
          onClick={() => {
            alert(vilaggerFactory.spawn(1).speak);
          }}
        >
          Baker
        </button>
        <button
          className={styles.button}
          onClick={() => {
            alert(vilaggerFactory.spawn(2).speak);
          }}
        >
          Carpenter
        </button>
        <button
          className={styles.button}
          onClick={() => {
            alert(enemyFactory.spawn(0).speak);
          }}
        >
          Wolf
        </button>
      </div>
    </Layout>
  );
};

export default FactoryPage;
