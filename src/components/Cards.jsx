import "../styles/Cards.css";
import Card from "./Card";
import { useState } from "react";
import { useCardsContext } from "../contexts/CardsContext";
function Cards({ cards }) {
  const { isOpen, setIsOpen } = useCardsContext();
  const [currentCardId, setCurrentCardId] = useState(0);
  const back_btn_handler = () => {
    setIsOpen(false);
  };
  const increaseCurrentCardId = () => {
    if (currentCardId >= 0 && currentCardId < cards.length - 1) {
      let newId = currentCardId + 1;
      setCurrentCardId(newId);
    }
  };
  const decreaseCurrentCardId = () => {
    if (currentCardId >= 0 && currentCardId <= cards.length - 1) {
      let newId = currentCardId - 1;
      console.log("New_id: ", newId)
      if (!(newId <= -1)) {
        setCurrentCardId(newId);
      }
    }
  };
  return (
    <div className="cards_main_container">
      <div className="cards_main_menu">
        <button className="back_btn" onClick={back_btn_handler}>
          Back
        </button>
      </div>
      <div className="cards_container">
        <button onClick={decreaseCurrentCardId} className="arrow_btn">
          ←
        </button>
        <Card card={cards[currentCardId]} />
        <button onClick={increaseCurrentCardId} className="arrow_btn">
          →
        </button>
      </div>
    </div>
  );
}

export default Cards;
