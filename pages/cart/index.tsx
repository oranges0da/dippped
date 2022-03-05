import { NextPage } from 'next'
import React from 'react'
import { useRecoilValue } from 'recoil'
import cartAtom from '../../state/atoms'
import CartItem from '../../components/cart/CartItem'
import Head from 'next/head'

const Cart: NextPage = () => {
  const cartItems = useRecoilValue(cartAtom)
  
  const arr = [...new Set(cartItems)]

  console.log(cartItems)
  console.log(arr)

  return (
    <>
      <Head>
        <title>Cart - Dippped</title>
      </Head>
      <div>
        {cartItems.map(item => (
          <CartItem id={item.id} name={item.name} price={item.price} quantity={item.quantity} />
        ))}
      </div>
    </>
  )
}

export default Cart
