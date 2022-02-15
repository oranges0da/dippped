import { atom } from 'recoil'

export interface CartItem {
  id: number,
  name: string,
  price: number
}

const cartAtom = atom({
  key: 'cart',
  default: [] as CartItem[]
})

export default cartAtom