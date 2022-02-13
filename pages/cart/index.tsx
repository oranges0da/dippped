import { NextPage } from 'next'
import React, { useContext } from 'react'
import { CartContext } from '../../context/cart/context'

const Cart: NextPage = () => {
  const { state, dispatch } = useContext(CartContext)

  return (
    <div>
      {state.products}
    </div>
  )
}

export default Cart
