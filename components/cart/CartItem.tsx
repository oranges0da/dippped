import React from 'react'
import { useRecoilState } from 'recoil'
import cartAtom from '../../state/atoms'

interface CartItemProps {
  id: number,
  name: string,
  price: number,
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price }) => {
  const [cartItems, setCartItems] = useRecoilState(cartAtom)

  const handleDelete = () => {

  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <button className='border border-gray my-5'>Delete</button>
    </div>
  )
}

export default CartItem
