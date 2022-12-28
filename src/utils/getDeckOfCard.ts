import type { DeckOfCard, ISuit } from "types/card.type";

export const getDeckOfCard = () => {
  const suits: ISuit[] = ["clubs", "diamonds", "hearts", "spades"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const deckOfCard: DeckOfCard = [];

  numbers.forEach((number) => {
    suits.forEach((suit) => {
      deckOfCard.push({
        suit,
        number,
      });
    });
  });

  return deckOfCard;
};

export const getRandomCards = (deckOfCard: DeckOfCard, numberUser: number) => {
  const _deckOfCard: DeckOfCard = JSON.parse(JSON.stringify(deckOfCard));
  const listCards = [];

  while (listCards.length < numberUser * 3) {
    const [card] = _deckOfCard.splice(getRandomIndex(1, _deckOfCard.length), 1);
    listCards.push(card);
  }

  return listCards;
};
const getRandomIndex = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
