import styled from "styled-components";

import Card from "components/Card";
import type { IUser } from "types/user.type";

const Container = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;
const ListCardUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Footer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const MoneyUser = styled.div`
  color: yellow;
  text-align: center;
  min-width: 5rem;
  padding: 1rem;
  border-radius: 2rem;
  width: 15rem;
  background-color: #3b313a;
  text-transform: uppercase;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-weight: 700;
  border: 2px solid white;
`;

const ButtonUser = styled.div`
  border: none;
  outline: none;
  color: white;
  background-color: ${(props: { bg?: string }) => props.bg};
  font-weight: bold;
  font-size: 1.6rem;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-transform: capitalize;
  cursor: pointer;
`;

interface IUserProps {
  user: IUser;
}

const User = (props: IUserProps) => {
  const { user } = props;

  return (
    <Container>
      <ListCardUser>
        {user.cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </ListCardUser>
      <Footer>
        <ButtonUser bg="#fe2008">bỏ bài</ButtonUser>
        <MoneyUser>{user.money}</MoneyUser>
        <ButtonUser bg="#4bac02">Lật bài</ButtonUser>
      </Footer>
    </Container>
  );
};

export default User;
