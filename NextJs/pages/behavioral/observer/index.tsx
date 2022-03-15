import type { NextPage } from "next";
import { useState } from "react";
import { Layout } from "../../../components/common";
import styles from "../../../styles/Home.module.css";
import { Newsletter } from "../../../lib/behavioral/observer/subject/Newsletter";
import { News } from "../../../lib/behavioral/observer/subject/News";
import { Client } from "../../../lib/behavioral/observer/observer/Client";
import { Partner } from "../../../lib/behavioral/observer/observer/Partner";

const client = new Client("1");
const client2 = new Client("2");
const partner = new Partner("3");
const newsletter = new Newsletter();

newsletter.subscribe(client);
newsletter.subscribe(client2);
newsletter.subscribe(partner);

const ObserverPage: NextPage = () => {
  const [news] = useState<News>(new News());
  const [currentNews, setCurrentNews] = useState<string>();

  const handleNewsChange = (e: React.FormEvent<HTMLInputElement>) => {
    news.message = e.currentTarget.value;
    newsletter.notify(news);

    setCurrentNews(news.message);
  };

  return (
    <Layout>
      <h1 className={styles.title}>Observer Pattern</h1>

      <div className={styles.description}>
        <p>News: {currentNews}</p>
        <p>
          Client: {client.notification}
          <button
            className={styles.button}
            onClick={() => newsletter.subscribe(client)}
          >
            Inscrever
          </button>
          <button
            className={styles.button}
            onClick={() => newsletter.unsubscribe(client.id)}
          >
            Cancelar
          </button>
        </p>
        <p>
          Client2: {client2.notification}
          <button
            className={styles.button}
            onClick={() => newsletter.subscribe(client2)}
          >
            Inscrever
          </button>
          <button
            className={styles.button}
            onClick={() => newsletter.unsubscribe(client2.id)}
          >
            Cancelar
          </button>
        </p>
        <p>
          Patner: {partner.prefix} {partner.alert}
          <button
            className={styles.button}
            onClick={() => newsletter.subscribe(partner)}
          >
            Inscrever
          </button>
          <button
            className={styles.button}
            onClick={() => newsletter.unsubscribe(partner.id)}
          >
            Cancelar
          </button>
        </p>
      </div>
      <input type="text" onChange={(e) => handleNewsChange(e)} />
    </Layout>
  );
};

export default ObserverPage;
