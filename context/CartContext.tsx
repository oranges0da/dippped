import React, { createContext, useState, FC, useReducer } from "react";
import { ProductType, InitialStateType } from "./types";
import { cartReducer } from "./CartReducer";

const initialState = {
  products: []
}

export const CartContext = createContext<{
  state: InitialStateType,
  dispatch: React.Dispatch<any>
}>(
  state: initialState,
  dispatch: () => null
);

export const CartProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};