import React from 'react'
import Link from 'next/link'

const ShopButton = () => {
  return (
    <Link href='/products' passHref>
      <div className='hover:cursor-pointer bg-pink py-3 px-5 font-karla hover:scale-110 transition-all'>
        <h1>Shop Now</h1>
      </div>
    </Link>
  )
}

export default ShopButton