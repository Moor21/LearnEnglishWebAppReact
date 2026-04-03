import { useRef, useEffect, useState } from "react";
import "../styles/NewCardAddMenu.css";

function NewCardAddMenu({ cardArrayObject, setCardArrayObject, setCardMenu }) {
  const menuRef = useRef(null);
  const frontInpRef = useRef(null);
  const backInpRef = useRef(null);
  useEffect(() => {
    const clickHandler = (event) => {
      const clickInsideTheMenu = menuRef.current?.contains(event.target);
      if (!clickInsideTheMenu) {
        setCardMenu(false);
      }
    };
    const keyHandler = (event) => {
      if (event.key.toLowerCase() === "enter") {
        console.log("keyHandler");
        addNewCard();
      }
    };
    document.addEventListener("mousedown", clickHandler);
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, []);
  const addNewCard = () => {
    const front_side_val = frontInpRef.current.value;
    const back_side_val = backInpRef.current.value;
    let new_card_obj = null;
    if (front_side_val && back_side_val) {
      new_card_obj = {
        front_side: front_side_val,
        back_side: back_side_val,
      };
      setCardArrayObject((prev) => [...prev, new_card_obj]);
      console.log("CardArrayObject: ", cardArrayObject);
      setCardMenu(false);
    } else {
      front_side_val ? backInpRef.current.focus() : frontInpRef.current.focus();
    }
  };
  return (
    <div ref={menuRef} className="cardAddMenu">
      <div className="inputs">
        <input ref={frontInpRef} placeholder="front_side..." type="text" />
        <input ref={backInpRef} placeholder="back_side..." type="text" />
        <button onClick={addNewCard} className="btn">
          add
        </button>
      </div>
    </div>
  );
}

export default NewCardAddMenu;
