import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

interface CartItem {
  id: number,
  name: string,
  price: number,
  quantity: number,
  images: string[]
}

const cartAtom = atom({
  key: 'cartAtom',
  default: [] as CartItem[],
  effects_UNSTABLE: [persistAtom]
})

export default cartAtom