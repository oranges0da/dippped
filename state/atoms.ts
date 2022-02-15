import { atom } from 'recoil'

export interface CartItem {
  id: number,
  name: string,
  price: number
}

const cartAtom = ({
  key: 'cart',
  default: [] as CartItem[]
})

export default cartAtom