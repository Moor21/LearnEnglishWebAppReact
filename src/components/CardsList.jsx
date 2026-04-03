import { useState, useEffect } from "react";
import { useCardsContext } from "../contexts/CardsContext";
import "../styles/CardsList.css";
function CardsList({ cardslist }) {
  const {
    currentCardsList,
    setCurrentCardsList,
    isOpen,
    setIsOpen,
    cardsCollections,
    setCardsCollections,
    cardsOfCurrentCollection,
    setCardsOfCurrentCollection,
  } = useCardsContext();

  function open_btn_click(event) {
    setIsOpen(true);
    setCurrentCardsList(cardslist);
    console.log("Current cardsList: ", currentCardsList)
    setCardsOfCurrentCollection(cardslist.cards);
    console.log(cardslist);
  }
  function delete_btn_click() {
    setCardsCollections((prev) =>
      (prev.filter((collection) => collection.id !== cardslist.id)),
    );
  }
  return (
    <div className="cardslist">
      <div className="card_header">
        <p>{cardslist.title}</p>
      </div>
      <div className="card_info">
        <p>{cardsOfCurrentCollection.length} Cards</p>
      </div>
      <div className="card_actions">
        <button onClick={open_btn_click} className="open_btn">
          Open
        </button>
        <button className="edit_btn">Edit</button>
        <button onClick={delete_btn_click} className="delete_btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default CardsList;
