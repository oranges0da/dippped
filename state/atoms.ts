import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

interface CartItem {
  id: number,
  name: string,
  price: number,
  stripe_price_id: string,
  images: string[]
}

// for holding global state of items that are in user's cart
const cartAtom = atom({
  key: 'cartAtom',
  default: [] as CartItem[],
  effects_UNSTABLE: [persistAtom]
})

export default cartAtom