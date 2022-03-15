import { Component, createSignal } from "solid-js";
import Client from "../../../lib/behavioral/observer/observer/Client";
import Patner from "../../../lib/behavioral/observer/observer/Patner";
import Newsletter from "../../../lib/behavioral/observer/subject/Newsletter";
import News from "../../../lib/behavioral/observer/subject/News";

const ObserverPage: Component = () => {
  const client = new Client("1");
  const client2 = new Client("2");
  const patner = new Patner("3");
  const newsletter = new Newsletter();

  const [news] = createSignal<News>(new News());
  const [currentNews, setCurrentNews] = createSignal<string>();
  const [clientNotification, setClientNotification] = createSignal<string>(
    client.notification
  );

  const handleNewsChange = (e: any) => {
    news().message = e.currentTarget.value;
    newsletter.notify(news());

    setCurrentNews(news().message);
    setClientNotification(client.notification);
  };

  return (
    <div>
      <h1 className={""}>Observer Pattern</h1>

      <div className={""}>
        <p>News: {currentNews}</p>
        <p>
          Client: {clientNotification}
          <button onClick={() => newsletter.subscribe(client)}>
            Inscrever
          </button>
          <button onClick={() => newsletter.unsubscribe(client.id)}>
            Cancelar
          </button>
        </p>
        <p>
          Client2: {client2.notification}
          <button onClick={() => newsletter.subscribe(client2)}>
            Inscrever
          </button>
          <button onClick={() => newsletter.unsubscribe(client2.id)}>
            Cancelar
          </button>
        </p>
        <p>
          Patner: {patner.prefix} {patner.alert}
          <button onClick={() => newsletter.subscribe(patner)}>
            Inscrever
          </button>
          <button onClick={() => newsletter.unsubscribe(patner.id)}>
            Cancelar
          </button>
        </p>
      </div>
      <input type="text" onChange={(e) => handleNewsChange(e)} />
    </div>
  );
};

export default ObserverPage;
