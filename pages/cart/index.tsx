import { NextPage } from 'next'
import React from 'react'
import { useRecoilValue } from 'recoil'
import cartAtom from '../../state/atoms'
import CartItem from '../../components/cart/CartItem'
import Head from 'next/head'

const Cart: NextPage = () => {
  const cartItems = useRecoilValue(cartAtom)

  let counter = {};

  cartItems.forEach(function(obj) {
    var key = JSON.stringify(obj)
    counter[key] = (counter[key] || 0) + 1
  })

  console.log(counter)

  return (
    <>
      <Head>
        <title>Cart - Dippped</title>
      </Head>
      <div>
        {counter.toString()}
      </div>
    </>
  )
}

export default Cart
