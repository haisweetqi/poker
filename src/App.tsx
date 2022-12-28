import Tabel from "components/Tabel";
import styled from "styled-components";
import { useState } from "react";

import type { IUser } from "types/user.type";
import User from "components/User";
import Computer from "components/Computer";

const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
`;
const ButtonStart = styled.button`
  position: absolute;
  z-index: 100;
`;

const App = () => {
  const [listUser, setListUser] = useState<IUser[]>([
    {
      id: "1",
      position: "bottom",
      typeUser: "player",
      avatar: "",
      cards: [
        { number: 7, suit: "spades" },
        { number: 8, suit: "diamonds" },
        { number: 9, suit: "clubs" },
      ],
      money: 1000,
      name: "leemanh",
    },
    {
      id: "2",
      position: "left",
      typeUser: "computer",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      cards: [
        { number: 7, suit: "spades" },
        { number: 8, suit: "diamonds" },
        { number: 9, suit: "clubs" },
      ],
      money: 5000,
      name: "Chị Quỳnh",
    },
    {
      id: "3",
      position: "top",
      typeUser: "computer",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      cards: [
        { number: 7, suit: "spades" },
        { number: 8, suit: "diamonds" },
        { number: 9, suit: "clubs" },
      ],
      money: 5000,
      name: "Quyết ĐK",
    },
    {
      id: "4",
      position: "right",
      typeUser: "computer",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      cards: [
        { number: 7, suit: "spades" },
        { number: 8, suit: "diamonds" },
        { number: 9, suit: "clubs" },
      ],
      money: 5000,
      name: "Tân",
    },
  ]);
  const [isStartGame, setIsStartGame] = useState(false);

  return (
    <Container>
      <ButtonStart>Bắt đầu</ButtonStart>

      <Tabel isStartGame={isStartGame} />

      {listUser.map((user) => {
        if (user.typeUser === "computer") {
          return <Computer user={user} />;
        }

        return <User user={user} />;
      })}
    </Container>
  );
};

export default App;
