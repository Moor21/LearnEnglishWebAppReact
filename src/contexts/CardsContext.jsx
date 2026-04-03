import {createContext, useContext, useState, useEffect} from 'react';

const CardsContext = createContext();
export const useCardsContext =()=>useContext(CardsContext);
export const CardsProvider = ({children})=>{
    const [cardsCollections, setCardsCollections] = useState(()=>{
       try{
        const savedCollections = localStorage.getItem('collections');
        return savedCollections ? JSON.parse(savedCollections) : [];
       }catch(err){
        console.error("Error reading localStorage: ", err);
        return [];
       }
    });
    const [currentCardsList, setCurrentCardsList] = useState(null);
    const [cardsOfCurrentCollection, setCardsOfCurrentCollection] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        const card_collections = localStorage.getItem('collections');
        if (card_collections) setCardsCollections(JSON.parse(card_collections));
        console.log("The collections is gotten from localStorage: ", card_collections);
    },[])
    useEffect(()=>{
        localStorage.setItem('collections', JSON.stringify(cardsCollections));
        console.log("The new collection is added in localStorage: ",JSON.stringify(cardsCollections) );
    },[cardsCollections])
    useEffect(()=>{
        if(currentCardsList){
        console.log("CardsOfCurrentCollection is changed!--------------");
        console.log(cardsOfCurrentCollection);
        currentCardsList.cards = cardsOfCurrentCollection;
        console.log("CurrentCardsList: ", currentCardsList);
        }
        
    },[cardsOfCurrentCollection])
    const value = {currentCardsList, setCurrentCardsList, isOpen, setIsOpen, cardsCollections, setCardsCollections, cardsOfCurrentCollection, setCardsOfCurrentCollection};
    
    return(
        <CardsContext.Provider value={value}>
            {children}
        </CardsContext.Provider>
    )
}