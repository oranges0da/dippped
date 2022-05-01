import React from 'react'
import Link from 'next/link'

const NoCartItems: React.FC = () => {
  // if no cart items, show this component
  return (
    <div className='font-karla'>
      <h1 className='text-xl md:text-5xl font-quando my-20 text-center'>Your cart is empty.</h1>
      <Link href='/products'>
        <div className='flex my-12 justify-center'>
          <h1 className='bg-pink font-bold px-4 py-3 hover:scale-110 hover:cursor-pointer sm:transition-all'>Continue Shopping</h1>
        </div>
      </Link>
    </div>
  )
}

export default NoCartItems
