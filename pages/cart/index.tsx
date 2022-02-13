import { NextPage } from 'next'
import React, { useContext } from 'react'
import { CartContext, CartProvider } from '../../context/CartContext'

const Cart: NextPage = () => {
  const { products, addProduct } = useContext(CartContext)

  console.log(products)

  return (
    <CartProvider>
      <div>
        {products[0].name}
      </div>
    </CartProvider>
  )
}

export default Cart
