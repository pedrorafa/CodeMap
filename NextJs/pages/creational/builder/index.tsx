import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import { ITerritory } from "../../../lib/creational/builder/Interface/ITerritory";
import { CityBuilder } from "../../../lib/creational/builder/Builder/CityBuilder";
import { JungleBuilder } from "../../../lib/creational/builder/Builder/JungleBuilder";
import { TerritoryBuilderDirector } from "../../../lib/creational/builder/TerritoryDirector";
import styles from "../../../styles/Home.module.css";
import PatternView from "../../../components/common/PatternView";

const builderCity: CityBuilder = new CityBuilder();
const builderJungle: JungleBuilder = new JungleBuilder();
const generator: TerritoryBuilderDirector = new TerritoryBuilderDirector(
  builderCity
);

const BuilderPage: NextPage = () => {
  useEffect(() => {}, []);

  const renderTerritory = (territory: ITerritory) => {
    return (
      <div className={styles.grid}>
        <p className={styles.description}>Size: {territory.size}</p>
        <p className={styles.description}>Buildings:</p>
        {territory.buildings.map((b) => {
          return <p> - {b.type} </p>;
        })}
        <p className={styles.description}>Population:</p>
        {territory.population.map((p) => {
          return (
            <button
              className={styles.button}
              onClick={() => {
                alert(p.speak());
              }}
            >
              {p.name} - {p.hp} - {p.strength}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <PatternView>
      <h1 className={styles.title}>Builder Pattern</h1>
      <div className={styles.grid}>
        {renderTerritory(
          (() => {
            generator.setTerritory(builderCity);
            return generator.generateTerritory(100, 10);
          })()
        )}
      </div>
      <br />
      <div className={styles.grid}>
        {renderTerritory(
          (() => {
            generator.setTerritory(builderCity);
            return generator.generateLonelyTerritory(100);
          })()
        )}
      </div>
      <br />
      <div className={styles.grid}>
        {renderTerritory(
          (() => {
            generator.setTerritory(builderJungle);
            return generator.generateTerritory(100, 10);
          })()
        )}
      </div>
      <br />
      <div className={styles.grid}>
        {renderTerritory(
          (() => {
            generator.setTerritory(builderJungle);
            return generator.generateLonelyTerritory(100);
          })()
        )}
      </div>
    </PatternView>
  );
};

export default BuilderPage;
