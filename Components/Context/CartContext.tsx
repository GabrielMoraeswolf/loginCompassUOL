import React, { createContext, useState } from "react";

type CardData = {
  cardId: string;
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

type CartContextType = {
  cards: CardData[];
  addCard: (card: CardData) => void;
  removeCard: (cardId: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cards: [],
  addCard: () => {},
  removeCard: () => {},
  clearCart: () => {},
});

export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [cards, setCards] = useState<CardData[]>([]);

  const addCard = (card: CardData) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const removeCard = (cardId: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.cardId !== cardId));
  };

  const clearCart = () => {
    setCards([]);
  };

  return (
    <CartContext.Provider value={{ cards, addCard, removeCard, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
