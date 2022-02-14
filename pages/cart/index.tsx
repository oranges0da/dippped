import { NextPage } from 'next'
import React, { useContext } from 'react'
import { CartContext, CartProvider } from '../../context/CartContext'

const Cart: NextPage = () => {
  const { products, addProduct } = useContext(CartContext)

  console.log(products)

  return (
    <CartProvider>
      <div>
        {products.map(item => (
          <h1>{item.name}</h1>
        ))}
      </div>
    </CartProvider>
  )
}

export default Cart
