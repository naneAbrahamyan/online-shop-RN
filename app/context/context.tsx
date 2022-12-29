import React, { createContext, PropsWithChildren, useState, FC } from "react";


const likedProducts = [
    {
        id:1,
        liked: false
    },
    {
        id:2,
        liked: false
    },
    {
        id:3,
        liked: false
    },
]
export interface ITodo {
  id: number;
  liked: boolean;
}
export type ContextType = {
  likedArray: ITodo[];
  setLikedArray: (liked : ITodo[]) => void;
};
export const Context = React.createContext<ContextType | null>(null);


const ContextProvider: React.FC<PropsWithChildren>  = ({ children }) => {
  const [likedArray, setLikedArray] = useState<ITodo[]>(likedProducts);

  return (
    <Context.Provider value={{ likedArray, setLikedArray }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;