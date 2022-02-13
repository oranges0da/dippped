export type ProductType = {
  id: number,
  name: string,
  price: number
}

export type CartContextState = {
  products: ProductType[];
  addProduct: (id: number, name: string, price: number) => void;
};