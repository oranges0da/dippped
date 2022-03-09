import { NextPage } from 'next'
import React from 'react'
import { useRecoilValue } from 'recoil'
import cartAtom from '../../state/atoms'
import CartItem from '../../components/cart/CartItem'
import Head from 'next/head'
import Link from 'next/link'
import ProductCard from '../../components/product/ProductCard'

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
  const cartItems = useRecoilValue(cartAtom)

  console.log(cartItems)
  
  if (cartItems.length === 0) { // if cart is empty
    return (
      <>
        <Head>
          <title>Cart - Dippped</title>
        </Head>
        <div className='text-center font-karla'>
          <h1 className='text-xl md:text-5xl font-quando my-20'>Your cart is empty.</h1>
          <Link href='/products'>
            <div className='flex justify-center my-12'>
              <h1 className='bg-pink font-bold px-4 py-3 md:hover:scale-110 hover:cursor-pointer'>Continue Shopping</h1>
            </div>
          </Link>
          <div className='md:flex flex-row'>
            <h1>Featured Collection</h1>
            {productSuggestions.map((item, index) => (
              <div key={index} className='md:hover:scale-105'>
                <ProductCard id={item.id} title={item.name} price={item.price} image={item.image} showPrice={true} />
              </div>
            ))}
          </div>
        </div>
      </>
    )
  } else { // if cart has items in it
    return ( 
      <>
        <Head>
          <title>Cart - Dippped</title>
        </Head>
        <div>
          {cartItems.map(item => (
            <CartItem id={item.id} name={item.name} price={item.price} image={item.images[0]} />
          ))}
          <h1>Checkout</h1>
        </div>
        <div className='flex flex-row'>
            <h1>Featured Collection</h1>
            {productSuggestions.map((item, index) => (
              <div key={index} className='md:hover:scale-105'>
                <ProductCard id={item.id} title={item.name} price={item.price} image={item.image} showPrice={true} />
              </div>
            ))}
          </div>
      </>
    )
  }
}

export default Cart
