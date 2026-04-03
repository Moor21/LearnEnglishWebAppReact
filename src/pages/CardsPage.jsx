import { useState, useEffect } from "react";
import CardsList from "../components/CardsList";
import "../styles/CardsPage.css";
import { useCardsContext } from "../contexts/CardsContext";
import Cards from "../components/Cards";
import NewListConfMenu from '../components/NewListConfMenu';
function CardsPage() {
  const { currentCardsList, setCurrentCardsList, isOpen, setIsOpen, cardsCollections, setCardsCollections,cardsOfCurrentCollection,  } = useCardsContext();
  const [addNewCollection, setAddNewCollection] = useState(false);
  useEffect(() => {
    console.log("The currentCardsList have been choisen! ", currentCardsList);
  }, [currentCardsList]);
  const add_new_collection = ()=>{
    setAddNewCollection(true);
  }


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
            {cardsCollections.map((cardslist) => (
              <CardsList cardslist={cardslist} key={cardslist.id} />
            ))}
          </div>
        </div>
      ) : (
        <Cards cards={cardsOfCurrentCollection} />
      )}
    </div>
  );
}

export default CardsPage;
