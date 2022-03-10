import React from 'react'
import { useRecoilState } from 'recoil'
import cartAtom from '../../state/atoms'
import Image from 'next/image'

interface CartItemProps {
  id: number,
  name: string | any,
  price: number,
  image: string
}

const imageSize = 100

const CartItem: React.FC<CartItemProps> = ({ id, name, price, image }) => {
  const [cartItems, setCartItems] = useRecoilState(cartAtom)

  const handleDelete = () => {
    setCartItems(oldCartItems => oldCartItems.filter(item => item.id !== id))

    console.log("Item deleted.")
  }

  return (
    <div className='border-b-1 border-gray flex'>
      <Image src={image} height={imageSize} width={imageSize} />
      <div className=''>
        <h1>{name}</h1>
        <h1>{price}</h1>
        <button onClick={() => handleDelete()}>Delete</button>
      </div>
    </div>
  )
}

export default CartItem