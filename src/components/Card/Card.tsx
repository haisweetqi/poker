import images from "assets/images";
import styled from "styled-components";
import { ICard } from "types/card.type";

const Container = styled.div`
  height: 10rem;
  width: 8rem;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5rem;
  user-select: none;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const NumberCard = styled.div`
  font-weight: bold;
  font-size: 2rem;
  color: ${({ color }: { color: string }) => color};
`;
const ImageSuitSmall = styled.img`
  width: 1rem;
  height: 1rem;
  display: block;
  object-fit: contain;
`;
const ImageSuitBig = styled.img`
  width: 4rem;
  height: 4rem;
  display: block;
  object-fit: contain;
  margin: 0 auto;
`;

interface CardProps {
  card: ICard;
}

const Card = ({ card }: CardProps) => {
  const suitCardImg =
    card.suit === "clubs"
      ? images.card.suits.clubsIcon
      : card.suit === "diamonds"
      ? images.card.suits.diamondsIcon
      : card.suit === "hearts"
      ? images.card.suits.heartsIcon
      : images.card.suits.spadesIcon;
  const color =
    card.suit === "hearts" || card.suit === "diamonds" ? "red" : "black";

  return (
    <Container>
      <HeaderCard>
        <NumberCard color={color}>{card.number}</NumberCard>
        <ImageSuitSmall src={suitCardImg} alt="card" />
      </HeaderCard>

      <ImageSuitBig src={suitCardImg} alt="card" width="3rem" height="3rem" />
    </Container>
  );
};

export default Card;
