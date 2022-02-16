import React from 'react'
import Head from 'next/head'

interface CartItemProps {
  id: number,
  name: string,
  price: number,
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{price}</h1>
    </div>
  )
}

export default CartItem
