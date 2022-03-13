import React, { useState} from 'react'
import CartItem from './CartItem'
import { useRecoilValue } from 'recoil'
import cartAtom from '../../state/atoms'
import { loadStripe } from '@stripe/stripe-js'
import Schedule from './Schedule'

const stripePromise = loadStripe('pk_test_51KOR9pKdGoM4dCrlq6pFdVhbnbN71JOKhx8VkxWtiDU8LU2s3FjWHZLI8Zn8HwXbmtZtAYUweAQVjlzp3vJJptvJ00D2Gl3i4B')

const HasCartItems: React.FC = () => {
  const cartItems = useRecoilValue(cartAtom)
  const [stripeErr, setStripeErr] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const stripeCartItems = cartItems.map(item => {
    return {
      price: item.stripe_price_id,
      quantity: 1
    }
  })

  const handleCheckout = async () => {
    setLoading(true)

    const stripe = await stripePromise

    const checkout = await stripe?.redirectToCheckout({
      lineItems: stripeCartItems,
      mode: "payment",
      cancelUrl: 'http://localhost:3000/cart',
      successUrl: 'http://localhost:3000/success',
      shippingAddressCollection: {
        allowedCountries: ['CA']
      },
    })

    if (checkout?.error) {
      setLoading(false)
      console.log(checkout?.error)
    }
  }

  return (
    <div className='flex-row justify-start'>
      <div>
        {cartItems.map(item => (
          <CartItem id={item.id} name={item.name} price={item.price} image={item.images[0]} />
        ))}
      </div>
      <div>
        <Schedule />
      </div>
      <div onClick={() => handleCheckout()} className='bg-black hover:cursor-pointer'>
        <h1 className='text-white'>Checkout</h1>
      </div>
    </div>
  )
}

export default HasCartItems
