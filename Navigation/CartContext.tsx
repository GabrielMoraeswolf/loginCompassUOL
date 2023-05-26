import React, { createContext, useState } from "react";

interface CartContextData {
  cartItems: any[]; // Defina o tipo correto para os itens do carrinho
  addToCart: (item: any) => void; // Defina o tipo correto para os itens
}

export const CartContext = createContext<CartContextData>({
  cartItems: [],
  addToCart: () => {},
});

type ProviderProps = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<ProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<any[]>([]); // Defina o tipo correto para os itens do carrinho

  const addToCart = (item: any) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
