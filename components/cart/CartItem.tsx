import React from 'react'
import { useRecoilState } from 'recoil'
import cartAtom from '../../state/atoms'

interface CartItemProps {
  id: number,
  name: string,
  price: number,
  quantity: number,
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, quantity }) => {
  const [cartItems, setCartItems] = useRecoilState(cartAtom)

  const handleDelete = () => {
    setCartItems(oldCartItems => oldCartItems.filter(item => item.id !== id))

    console.log("Item deleted.")
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{price * quantity}</h1>
      <h1>{quantity}</h1>
      <button 
        className='border border-gray my-5'
        onClick={() => handleDelete()}
      >Delete</button>
    </div>
  )
}

export default CartItem
