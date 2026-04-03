import "../styles/Cards.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useCardsContext } from "../contexts/CardsContext";
import NewCardAddMenu from "./NewCardAddMenu";
function Cards({ cards }) {
  const { isOpen, setIsOpen, cardsOfCurrentCollection, setCardsOfCurrentCollection } = useCardsContext();
  const [currentCardId, setCurrentCardId] = useState(0);
  const [cardArrayObject, setCardArrayObject] = useState(cards);
  const [cardMenu, setCardMenu] = useState(false);
  const back_btn_handler = () => {
    setIsOpen(false);
  };
  const increaseCurrentCardId = () => {
    if (currentCardId >= 0 && currentCardId < cardsOfCurrentCollection.length - 1) {
      let newId = currentCardId + 1;
      setCurrentCardId(newId);
    }
  };
  const decreaseCurrentCardId = () => {
    if (currentCardId >= 0 && currentCardId <= cardsOfCurrentCollection.length - 1) {
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
  useEffect(()=>{
    console.log("CardsArrayObject is changed!");
    console.log("Updated cardArrayObject: ", cardArrayObject);
    setCardsOfCurrentCollection(cardArrayObject);
  }, [cardArrayObject])
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
      {cardsOfCurrentCollection.length > 0 ? (
        <div className="cards_container">
          <button onClick={decreaseCurrentCardId} className="arrow_btn">
            ←
          </button>
          <Card card={cardsOfCurrentCollection[currentCardId]} />
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
