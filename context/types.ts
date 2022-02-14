import React from "react";

export type ProductType = {
  id: number | null | undefined,
  name: string | null | undefined,
  price: number | null | undefined
}

export type CartContextState = {
  products: ProductType[] | any;
  addProduct: React.Dispatch<any>
};