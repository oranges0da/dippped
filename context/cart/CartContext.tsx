import React, { createContext, useState, FC } from "react";
import { ProductType, CartContextState } from "./types";

const contextDefaultValues: CartContextState = {
  products: [],
  addProduct: () => {}
};

export const CartContext = createContext<CartContextState>(
  contextDefaultValues
);

export const CartProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<ProductType[]>(contextDefaultValues.products);

  const addProduct = (id: number, name: string, price: number) => setProducts((products) => [...products, { id, name, price }]);

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
};