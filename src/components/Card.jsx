import { useState } from "react";
import "../styles/Card.css";
function Card({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const card_click_handler = ()=>{
    setIsFlipped(!isFlipped);
  }
  return (
    <div onClick={card_click_handler} className="card_body">
      {!isFlipped ? (
        <div  className="card_front_side">
            <p>Front-side</p>
            {card.front_side}
        </div>
      ) : (
        <div  className="card_back_side">
            <p>Back-side</p>
            {card.back_side}
        </div>
      )}
    </div>
  );
}

export default Card;
