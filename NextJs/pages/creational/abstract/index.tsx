import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import { CityFactory } from "../../../lib/creational/abstract/Factory/CityFactory";
import { JungleFactory } from "../../../lib/creational/abstract/Factory/JungleFactory";
import { ITerritory } from "../../../lib/creational/abstract/interface/ITerritory";
import styles from "../../../styles/Home.module.css";

const cityFactory: CityFactory = new CityFactory();
const jungleFactory: JungleFactory = new JungleFactory();

const city: ITerritory = cityFactory.generateTerritory();
const jungle: ITerritory = jungleFactory.generateTerritory();

const AbstractPage: NextPage = () => {
  useEffect(() => {}, []);

  const renderTerritory = (territory: ITerritory) => {
    return (
      <div className={styles.grid}>
        <p className={styles.description}>Size: {territory.size}</p>
        <p className={styles.description}>Buildings:</p>
        {territory.buildings.map((b) => {
          return <p>{b.type}</p>;
        })}
        <p className={styles.description}>Population:</p>
        {territory.population.map((p) => {
          return (
            <button
              className={styles.button}
              onClick={() => {
                alert(p.speak);
              }}
            >
              {p.speak}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <Layout>
      <h1 className={styles.title}>Abstract Pattern</h1>
      <div className={styles.grid}>{renderTerritory(city)}</div>
      <div className={styles.grid}>{renderTerritory(jungle)}</div>
    </Layout>
  );
};

export default AbstractPage;
