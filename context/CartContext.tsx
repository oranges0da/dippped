import React, { createContext, useState, FC, useReducer } from "react";
import { ProductType, InitialStateType } from "./types";
import cartReducer from "./CartReducer";

const initialState: any = {
  products: [{
    id: 1,
    name: 's',
    price: 2
  }]
}

export const CartContext = createContext<{
  state: any,
  dispatch: React.Dispatch<any>
}>({
  state: [],
  dispatch: () => null
});

export const CartProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};