import { NextPage } from 'next'
import React from 'react'
import { useRecoilValue } from 'recoil'
import cartAtom from '../../state/atoms'
import CartItem from '../../components/cart/CartItem'
import Head from 'next/head'


const Cart: NextPage = () => {
  const cartItems = useRecoilValue(cartAtom)

  return (
    <>
      <Head>
        <title>Cart - Dippped</title>
      </Head>
      <div>
        {cartItems.map(item => (
          <CartItem id={item.id} name={item.name} price={item.price} image={item.images[0]} />
        ))}
      </div>
    </>
  )
}

export default Cart
