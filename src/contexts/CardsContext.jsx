import {createContext, useContext, useState} from 'react';

const CardsContext = createContext();
export const useCardsContext =()=>useContext(CardsContext);
export const CardsProvider = ({children})=>{
    const [cardsCollections, setCardsCollections] = useState([]);
    const [currentCardsList, setCurrentCardsList] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const value = {currentCardsList, setCurrentCardsList, isOpen, setIsOpen, cardsCollections, setCardsCollections};
    return(
        <CardsContext.Provider value={value}>
            {children}
        </CardsContext.Provider>
    )
}