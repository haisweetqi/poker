import pokerTabel from "./poker-tabel.jpg";
import clubsIcon from "./clubs-icon.png";
import diamondsIcon from "./diamonds-icon.png";
import heartsIcon from "./hearts.png";
import spadesIcon from "./spades.png";
import backSideCard from "./back-side-card.png";

const images = {
  tabel: { pokerTabel },
  card: {
    suits: {
      clubsIcon,
      diamondsIcon,
      heartsIcon,
      spadesIcon,
    },
    backSideCard,
  },
} as const;

export default images;
