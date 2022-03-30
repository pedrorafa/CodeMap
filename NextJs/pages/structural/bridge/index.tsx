import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import { ChatChannel } from "../../../lib/structural/bridge/Channel/ChatChannel";
import { EmailChannel } from "../../../lib/structural/bridge/Channel/EmailChannel";
import { IChannel } from "../../../lib/structural/bridge/Channel/IChannel";
import { ClientMessage } from "../../../lib/structural/bridge/Message/ClientMessage";
import { EnterpriseMessage } from "../../../lib/structural/bridge/Message/EnterpriseMessage";
import styles from "../../../styles/Home.module.css";

const emailChannel: IChannel = new EmailChannel();
const chatChannel = new ChatChannel();

const clientMessage: ClientMessage = new ClientMessage(emailChannel);
clientMessage.msg = "Test";

const enterpriseMessage: EnterpriseMessage = new EnterpriseMessage(
  emailChannel
);
enterpriseMessage.enterpriseName = "Pattern Bridge";
enterpriseMessage.msg = "Test";

clientMessage.send();
enterpriseMessage.send();

clientMessage.channel = chatChannel;
enterpriseMessage.channel = chatChannel;

clientMessage.send();
enterpriseMessage.send();

const BridgePage: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Bridge Pattern</h1>
      <div className={styles.description}>
        <p>Look console</p>
      </div>
    </Layout>
  );
};

export default BridgePage;
