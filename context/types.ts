export type ProductType = {
  id: number | null | undefined,
  name: string | null | undefined,
  price: number | null | undefined
}

export type CartContextState = {
  products: ProductType[];
  addProduct: (id: number, name: string, price: number) => void;
};