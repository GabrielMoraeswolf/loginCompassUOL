import React, { createContext, useState } from "react";

type CardData = {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
};

type CartContextType = {
  cards: CardData[];
  addCard: (card: CardData) => void;
  removeCard: (cardId: number) => void;
};

export const CartContext = createContext<CartContextType>({
  cards: [],
  addCard: () => {},
  removeCard: () => {},
});

export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [cards, setCards] = useState<CardData[]>([]);

  const addCard = (card: CardData) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const removeCard = (cardId: number) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  return (
    <CartContext.Provider value={{ cards, addCard ,removeCard}}>
      {children}
    </CartContext.Provider>
  );
};
