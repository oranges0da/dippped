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
      
    </div>
  )
}

export default CartItem
