import React from 'react'
import CartItem from './CartItem'
import { useRecoilValue } from 'recoil'
import cartAtom from '../../state/atoms'

const HasCartItems: React.FC = () => {
  const cartItems = useRecoilValue(cartAtom)

  return (
    <div className='flex-row justify-start'>
      <div>
        {cartItems.map(item => (
          <CartItem id={item.id} name={item.name} price={item.price} image={item.images[0]} />
        ))}
      </div>
      <h1 className='text-center md:text-right'>Checkout</h1>
    </div>
  )
}

export default HasCartItems
