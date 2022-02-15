import React from "react";

export type ProductType = {
  id: number,
  name: string,
  price: number
}

export type InitialStateType = {
  products: ProductType[]
}