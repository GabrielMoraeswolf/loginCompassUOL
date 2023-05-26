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
};

export const CartContext = createContext<CartContextType>({
  cards: [],
  addCard: () => {},
});

export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [cards, setCards] = useState<CardData[]>([]);

  const addCard = (card: CardData) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  return (
    <CartContext.Provider value={{ cards, addCard }}>
      {children}
    </CartContext.Provider>
  );
};
