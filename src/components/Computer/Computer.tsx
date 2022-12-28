import styled, { css } from "styled-components";

import type { IUser, Position } from "types/user.type";
import images from "assets/images";

const Container = styled.div`
  position: absolute;
  display: flex;
  gap: 2rem;
  ${(props: { position: Position }) => {
    switch (props.position) {
      case "left":
        return css`
          top: 50%;
          left: 10%;
          transform: translateY(-50%);
        `;
      case "right":
        return css`
          top: 50%;
          right: 10%;
          transform: translateY(-50%);
          flex-direction: row-reverse;
        `;
      case "top":
        return css`
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          flex-direction: row-reverse;
        `;

      default:
        break;
    }
  }}
`;
const InforWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const AvatarWrap = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;
  cursor: pointer;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Money = styled.div`
  color: yellow;
  font-weight: bold;
  text-transform: capitalize;
`;

const Name = styled.div`
  color: white;
  font-weight: bold;
  text-transform: capitalize;
`;
const CardComputerWrap = styled.div``;
const CardComputerImage = styled.img`
  height: 10rem;
  width: 8rem;
  border-radius: 4px;
  cursor: pointer;
`;

interface IComputer {
  user: IUser;
}

const Computer = ({ user }: IComputer) => {
  return (
    <Container position={user.position}>
      <InforWrap>
        <Name>{user.name}</Name>
        <AvatarWrap>
          <AvatarImage src={user.avatar} alt={user.name} />
        </AvatarWrap>
        <Money>{user.money}</Money>
      </InforWrap>

      <CardComputerWrap>
        <CardComputerImage src={images.card.backSideCard} alt="card-computer" />
      </CardComputerWrap>
    </Container>
  );
};

export default Computer;
