import { NextPage } from 'next'
import React from 'react'
import { useRecoilValue } from 'recoil'
import cartAtom from '../../state/atoms'
import CartItem from '../../components/cart/CartItem'
import Head from 'next/head'

const Cart: NextPage = () => {
  const cartItems = useRecoilValue(cartAtom)

  const count = {};

  cartItems.forEach(element => {
    count[element.name] = (count[element.name] || 0) + 1;
  });

  console.log(count)
  console.log(cartItems)

  return (
    <>
      <Head>
        <title>Cart - Dippped</title>
      </Head>
      <div>
      </div>
    </>
  )
}

export default Cart
