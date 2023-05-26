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
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cards: [],
  addCard: () => {},
  clearCart: () => {},
});

export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [cards, setCards] = useState<CardData[]>([]);

  const addCard = (card: CardData) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const clearCart = () => {
    setCards([]); // Limpa o array de cards
  };

  return (
    <CartContext.Provider value={{ cards, addCard, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
