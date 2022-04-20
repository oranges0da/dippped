import React, { useState} from 'react'
import CartItem from './CartItem'
import { useRecoilValue } from 'recoil'
import cartAtom from '../../state/atoms'
import Schedule from './Schedule'
import axios from 'axios'

const url = 'http://localhost:4000/checkout' // main Stripe checkout endpoint

const HasCartItems: React.FC = () => {
  const cartItems = useRecoilValue(cartAtom)

  // turn user's cart items into list_items that can be sent to Stripe
  const stripeCartItems = cartItems.map(item => (
    {
      price: item.stripe_price_id,
      quantity: 1
    }
  ))

  // send list_items to Stripe to create a checkout session
  const handleCheckout = async () => {
    try {
      const { data: res } = await axios.post(url, {
        stripe_items: stripeCartItems
      })

      window.location.href = res.url;
      
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='flex-row justify-start'>
      <div>
        {cartItems.map(item => (
          <CartItem id={item.id} name={item.name} price={item.price} image={item.images[0]} />
        ))}
      </div>
      <div className='flex justify-end'>
        <Schedule />
      </div>
      <div className='bg-black hover:cursor-pointer text-center py-4 mx-20 rounded-full text-2xl text-white' onClick={() => handleCheckout()}>
        <h1>Checkout</h1>
      </div>
    </div>
  )
}

export default HasCartItems
