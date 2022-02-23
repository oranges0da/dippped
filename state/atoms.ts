import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export interface CartItem {
  id: number,
  name: string,
  price: number,
  quantity: number,
  images: string
}

const cartAtom = atom({
  key: 'cart',
  default: [] as CartItem[],
  effects_UNSTABLE: [persistAtom],
})

export default cartAtom