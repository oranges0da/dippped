import { NextPage } from 'next'
import React, { useContext } from 'react'
import { CartContext, CartProvider } from '../../context/CartContext'

const Cart: NextPage = () => {
  const { state, dispatch } = useContext(CartContext)

  console.log(state)

  return (
    <CartProvider>
      <div>
        {state.map(item => (
          <h1>{item.name}</h1>
        ))}
      </div>
    </CartProvider>
  )
}

export default Cart
