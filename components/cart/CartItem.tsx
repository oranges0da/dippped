import React from 'react'
import { useRecoilState } from 'recoil'
import cartAtom from '../../state/atoms'

interface CartItemProps {
  id: number,
  name: string | any,
  price: number,
  image: string
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, image }) => {
  const [cartItems, setCartItems] = useRecoilState(cartAtom)

  const handleDelete = () => {
    setCartItems(oldCartItems => oldCartItems.filter(item => item.id !== id))

    console.log("Item deleted.")
  }

  return (
    <div>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>${price}.00</h1>
      <img src={image} />
      <button 
        className='border border-gray my-5'
        onClick={() => handleDelete()}
      >Delete</button>
    </div>
  )
}

export default CartItem