import { useState, useEffect } from "react";
import CardsList from "../components/CardsList";
import "../styles/CardsPage.css";
import { useCardsContext } from "../contexts/CardsContext";
import Cards from "../components/Cards";
import NewListConfMenu from '../components/NewListConfMenu';
function CardsPage() {
  const { currentCardsList, setCurrentCardsList, isOpen, setIsOpen } = useCardsContext();
  const [addNewCollection, setAddNewCollection] = useState(false);
  useEffect(() => {
    console.log("The currentCardsList have been choisen! ", currentCardsList);
  }, [currentCardsList]);
  const add_new_collection = ()=>{
    setAddNewCollection(true);
  }
  const cardslist_arr = [
    {
      id: 1,
      title: "animals",
      cards: [
        { id: 1, front_side: "lion", back_side: "лев" },
        { id: 2, front_side: "zebra", back_side: "зебра" },
      ],
    },
  ];
  return (
    <div className="cardspage">
      {!isOpen ? (
        <div className="cardspage_lists">
          {addNewCollection && <NewListConfMenu setAddNewCollection={setAddNewCollection}/>}
          <div className="cardspage_header">
          <h1>Collections of cards</h1>  
          <button onClick={add_new_collection} className="add_btn">✚</button>
          </div> 
          <div className="cardsGrid">
            {cardslist_arr.map((cardslist) => (
              <CardsList cardslist={cardslist} key={cardslist.id} />
            ))}
          </div>
        </div>
      ) : (
        <Cards cards={currentCardsList.cards} />
      )}
    </div>
  );
}

export default CardsPage;
