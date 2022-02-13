import React, { createContext, useReducer } from 'react';
import { productReducer } from './reducers';

type ProductType = {
  id: number;
  name: string;
  price: number;
}

type InitialStateType = {
  products: ProductType[];
}

const initialState = {
  products: [],
}

const CartContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider };