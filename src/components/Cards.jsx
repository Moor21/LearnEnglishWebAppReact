import "../styles/Cards.css";
import Card from "./Card";
import { useState } from "react";
import { useCardsContext } from "../contexts/CardsContext";
import NewCardAddMenu from "./NewCardAddMenu";
function Cards({ cards }) {
  const { isOpen, setIsOpen } = useCardsContext();
  const [currentCardId, setCurrentCardId] = useState(0);
  const [cardArrayObject, setCardArrayObject] = useState(cards);
  const [cardMenu, setCardMenu] = useState(false);
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
      console.log("New_id: ", newId);
      if (!(newId <= -1)) {
        setCurrentCardId(newId);
      }
    }
  };
  const add_new_card = () => {
    setCardMenu(true);
  };
 
  return (
    <div className="cards_main_container">
      <div className="cards_main_menu">
        {cardMenu && <NewCardAddMenu cardArrayObject = {cardArrayObject} setCardArrayObject={setCardArrayObject} setCardMenu = {setCardMenu} />}
        <button className="cards_menu_btn" onClick={back_btn_handler}>
          Back
        </button>
        <button onClick={add_new_card} className="cards_menu_btn">
          +
        </button>
      </div>
      {cards.length > 0 ? (
        <div className="cards_container">
          <button onClick={decreaseCurrentCardId} className="arrow_btn">
            ←
          </button>
          <Card card={cardArrayObject[currentCardId]} />
          <button onClick={increaseCurrentCardId} className="arrow_btn">
            →
          </button>
        </div>
      ) : (
        <div className="cards_empty_box">
          <p>Cards is empty</p>
        </div>
      )}
    </div>
  );
}

export default Cards;
