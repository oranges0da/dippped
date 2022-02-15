import React from 'react'

interface CartItemProps {
  id: number,
  name: string,
  price: number,
  images: string[]
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, images }) => {
  return (
    <div>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <img src={images[0]} />
    </div>
  )
}

export default CartItem
