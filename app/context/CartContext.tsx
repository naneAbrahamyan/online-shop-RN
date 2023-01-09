import React, { createContext, PropsWithChildren, useState, FC } from "react";


const cartProducts = [
    {
        id:1,
        added: false,
    },
    {
        id:2,
        added: false
    },
    {
        id:3,
        added: false
    },
    {
        id:4,
        added: false
    },
    {
        id:5,
        added: false
    }
]
export interface Cart {
  id: number;
  added: boolean;
}
export type CartContextType = {
  cartItems: Cart[];
  setCartItems: (liked : Cart[]) => void;
};
export const CartContext = React.createContext<CartContextType | null>(null);


const CartContextProvider: React.FC<PropsWithChildren>  = ({ children }) => {
  const [cartItems, setCartItems] = useState<Cart[]>(cartProducts);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;