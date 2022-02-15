import { NextPage } from 'next'
import React from 'react'
import { useRecoilValue } from 'recoil'
import cartAtom from '../../state/atoms'
import CartItem from '../../components/cart/CartItem'

const Cart: NextPage = () => {
  const cartItems = useRecoilValue(cartAtom)

  return (
    <div>
      {cartItems.map((item, index) => (
        <CartItem id={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  )
}

export default Cart
