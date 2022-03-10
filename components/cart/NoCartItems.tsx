import React from 'react'
import Link from 'next/link'

const NoCartItems: React.FC = () => {
  return (
    <div className='font-karla'>
      <h1 className='text-xl md:text-5xl font-quando my-20 '>Your cart is empty.</h1>
      <Link href='/products'>
        <div className='flex my-12'>
          <h1 className='bg-pink font-bold px-4 py-3 hover:scale-110 hover:cursor-pointer sm:transition-all'>Continue Shopping</h1>
        </div>
      </Link>
    </div>
  )
}

export default NoCartItems
