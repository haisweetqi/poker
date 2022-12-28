import React from "react";
import { motion } from "framer-motion";
import images from "assets/images";
import {
  BackSideCardAnimate,
  BackSideCardImage,
  Container,
  DeckOfCardWrap,
} from "./Tabel.styled";

interface TabelProps {
  isStartGame: boolean;
}

const Tabel = ({ isStartGame }: TabelProps) => {
  return (
    <Container>
      <DeckOfCardWrap>
        <BackSideCardImage
          src={images.card.backSideCard}
          alt="backSideCard"
          index={0}
        />
        <BackSideCardImage
          src={images.card.backSideCard}
          alt="backSideCard"
          index={1}
        />
        <BackSideCardImage
          src={images.card.backSideCard}
          alt="backSideCard"
          index={2}
        />
        <div>
          {/* user */}
          <BackSideCardAnimate
            as={motion.img}
            src={images.card.backSideCard}
            alt="backSideCard"
            initial={{
              x: 8,
              y: -8,
            }}
            animate={{
              x: -92,
              y: 181,
            }}
            transition={{ duration: 1, delay: 0 }}
          />
          <BackSideCardAnimate
            as={motion.img}
            src={images.card.backSideCard}
            alt="backSideCard"
            initial={{
              x: 8,
              y: -8,
            }}
            animate={{
              x: -2,
              y: 181,
            }}
            transition={{ duration: 1, delay: 1 }}
          />
          <BackSideCardAnimate
            as={motion.img}
            src={images.card.backSideCard}
            alt="backSideCard"
            initial={{
              x: 8,
              y: -8,
            }}
            animate={{
              x: 90,
              y: 181,
            }}
            transition={{ duration: 1, delay: 2 }}
          />
          {/* left */}
          <BackSideCardAnimate
            as={motion.img}
            src={images.card.backSideCard}
            alt="backSideCard"
            initial={{
              x: 8,
              y: -8,
            }}
            animate={{
              x: -420,
              y: -2,
            }}
            transition={{ duration: 1, delay: 0.25 }}
          />
          <BackSideCardAnimate
            as={motion.img}
            src={images.card.backSideCard}
            alt="backSideCard"
            initial={{
              x: 8,
              y: -8,
            }}
            animate={{
              x: -420,
              y: -2,
            }}
            transition={{ duration: 1, delay: 1.25 }}
          />
          <BackSideCardAnimate
            as={motion.img}
            src={images.card.backSideCard}
            alt="backSideCard"
            initial={{
              x: 8,
              y: -8,
            }}
            animate={{
              x: -420,
              y: -2,
            }}
            transition={{ duration: 1, delay: 2.25 }}
          />
          {/* right */}
          <BackSideCardAnimate
            as={motion.img}
            src={images.card.backSideCard}
            alt="backSideCard"
            initial={{
              x: 8,
              y: -8,
            }}
            animate={{
              x: 435,
              y: -2,
            }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <BackSideCardAnimate
            as={motion.img}
            src={images.card.backSideCard}
            alt="backSideCard"
            initial={{
              x: 8,
              y: -8,
            }}
            animate={{
              x: 435,
              y: -2,
            }}
            transition={{ duration: 1, delay: 1.5 }}
          />
          <BackSideCardAnimate
            as={motion.img}
            src={images.card.backSideCard}
            alt="backSideCard"
            initial={{
              x: 8,
              y: -8,
            }}
            animate={{
              x: 435,
              y: -2,
            }}
            transition={{ duration: 1, delay: 2.5 }}
          />
          {/* top */}
          <BackSideCardAnimate
            as={motion.img}
            src={images.card.backSideCard}
            alt="backSideCard"
            initial={{
              x: 8,
              y: -8,
            }}
            animate={{
              x: -42,
              y: -253,
            }}
            transition={{ duration: 1, delay: 0.75 }}
          />
          <BackSideCardAnimate
            as={motion.img}
            src={images.card.backSideCard}
            alt="backSideCard"
            initial={{
              x: 8,
              y: -8,
            }}
            animate={{
              x: -42,
              y: -253,
            }}
            transition={{ duration: 1, delay: 1.75 }}
          />
          <BackSideCardAnimate
            as={motion.img}
            src={images.card.backSideCard}
            alt="backSideCard"
            initial={{
              x: 8,
              y: -8,
            }}
            animate={{
              x: -42,
              y: -253,
            }}
            transition={{ duration: 1, delay: 2.75 }}
          />
        </div>
      </DeckOfCardWrap>
    </Container>
  );
};

export default Tabel;
