import React from 'react'
import { NextPage } from 'next'
import CartItem from './CartItem'
import { useRecoilValue } from 'recoil'
import cartAtom from '../../state/atoms'

const HasCartItems: NextPage = () => {
  const cartItems = useRecoilValue(cartAtom)
  
  return (
    <div className='flex text-2xl justify-between'>
    {cartItems.map(item => (
      <CartItem id={item.id} name={item.name} price={item.price} image={item.images[0]} />
    ))}
    <h1>Checkout</h1>
  </div>
  )
}

export default HasCartItems
