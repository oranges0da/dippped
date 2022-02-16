import { atom } from 'recoil'

export interface CartItem {
  id: number,
  name: string,
  price: number,
  size: string,
  quantity: number,
  images: string
}

const cartAtom = atom({
  key: 'cart',
  default: [] as CartItem[]
})

export default cartAtom