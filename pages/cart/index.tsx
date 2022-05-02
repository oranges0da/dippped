import { NextPage } from 'next'
import React from 'react'
import { useRecoilValue } from 'recoil'
import cartAtom from '../../state/atoms'
import Head from 'next/head'
import ProductCard from '../../components/product/HomeProductCard'
import HasCartItems from '../../components/cart/HasCartItems'
import NoCartItems from '../../components/cart/NoCartItems'

// for product suggestions under cart
const productSuggestions = [
  {
    id: 1,
    name: "Valentine's Day Box",
    price: 40,
    image: 'https://i.imgur.com/mpfO7bt.jpg'
  }, {
    id: 2,
    name: "White Chocolate Box",
    price: 20,
    image: 'https://i.imgur.com/27Js6h4.jpg'
  }, {
    id: 5,
    name: "Chocolate Lover's Box",
    price: 40,
    image: 'https://i.imgur.com/87XyYFa.jpg'
  }, {
    id: 4,
    name: "Wedding Box",
    price: 30,
    image: 'https://i.imgur.com/ALiZFnz.jpg'
  }
]

const Cart: NextPage = () => {
  // get user's items from state
  const cartItems = useRecoilValue(cartAtom)

  console.log(cartItems)

  return (
    <>
      <Head>
        <title>Cart - Dippped</title>
      </Head>
      {
        cartItems.length !== 0 ? <HasCartItems /> : <NoCartItems /> // render whichever page depending on if cart is empty
      }
      <div className='sm:flex mx-auto'>
      {productSuggestions.map((item, index) => (
        <div key={index} className='md:hover:scale-105 sm:transition-all'>
          <ProductCard id={item.id} title={item.name} price={item.price} image={item.image} showPrice={false} showArrow={true} />
        </div>
      ))}
      </div>
    </>
  )
}

export default Cart