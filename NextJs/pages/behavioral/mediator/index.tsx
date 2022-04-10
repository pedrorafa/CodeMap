import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../../components/common";
import { ChatRoom } from "../../../lib/behavioral/mediator/ChatRoom";
import { ChatBot } from "../../../lib/behavioral/mediator/Participant/ChatBot";
import { User } from "../../../lib/behavioral/mediator/Participant/User";
import styles from "../../../styles/Home.module.css";

const moderator: ChatBot = new ChatBot("ChatBot")
const room: ChatRoom = new ChatRoom(moderator);

const user_1: User = new User(room, "User-1");
const user_2: User = new User(room, "User-2");

room.addParticipant(user_1)
room.addParticipant(user_2)

const MediatorPage: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Visitor Pattern</h1>
      <div className={styles.description}>
        <p>{user_1.act("Hi")}</p>
        <p>{user_2.act("Hi")}</p>
        <p>{user_1.act("How are you?")}</p>
        <p>{user_1.act("Maybe we can have fun?")}</p>
      </div>
    </Layout>
  );
};

export default MediatorPage;
