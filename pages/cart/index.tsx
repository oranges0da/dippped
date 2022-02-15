import { NextPage } from 'next'
import React from 'react'
import { useRecoilValue } from 'recoil'
import cartAtom from '../../state/atoms'

const Cart: NextPage = () => {
  const cartItems = useRecoilValue(cartAtom)

  return (
    <div>
      cart
    </div>
  )
}

export default Cart
