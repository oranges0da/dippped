import React, { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import cartAtom from '../../state/atoms'
import { useRecoilState } from 'recoil'

const Product = ({ product }) => {
  const [cartItems, setCartItems] = useRecoilState(cartAtom)

  const addCart = () => {
    const found = cartItems.find(item => item.id === product.id)

    // check if product already in cart
    if (!found) {
      setCartItems(oldCartItems => [
        ...oldCartItems, {
          id: product.id,
          name: product.name,
          price: product.price,
          images: product.images
        }
      ])
    } else {
      alert(`The ${product.name} is already in your cart. For large orders or catering, please contact example@info.com`)
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} - Dipped </title>
      </Head>
      <div>
        <main className="my-8 font-karla text-lg">
        <div className="px-6">
            <div className="md:flex">
                <div className="w-full">
                  {product.images.map(image => (
                    <img src={image} alt={product.name} className="w-full mb-7 rounded-sm" />
                  ))}
                </div>
                <div className="w-full max-w-lg mx-auto md:ml-14 md:w-1/2 justify-between">
                    <h1 className='font-quando text-3xl my-5 mt-10 md:my-0 md:mt-0'>{product.name}</h1>
                    <h1 className='my-5 text-md'>{product.desc}</h1>
                    <h1 className="my-4 text-3xl">${product.price}.00</h1>
                    <div 
                      className='text-center bg-black rounded-3xl mt-5 md:hover:scale-105 sm:transition-all hover:cursor-pointer'
                      onClick={() => addCart()}
                    >
                      <h1 
                        className='text-white py-2 text-2xl'
                      >Add to Cart</h1>
                    </div>
                </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

// context parameter holds object containing current page id
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { data: product } = await axios.get(`http://localhost:4000/product/${id}`)

  return {
    props: { product }
  }
}

// get every product for each and every single product path
export const getStaticPaths = async () => {
  const { data } = await axios.get('http://localhost:4000/products')
  const products = await data.products;

  const paths = products.map(item => {
    return {
      params: { id: item.id.toString() }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export default Product