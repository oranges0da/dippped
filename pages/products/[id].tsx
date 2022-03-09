import React, { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import cartAtom from '../../state/atoms'
import { useRecoilState } from 'recoil'

const Product = ({ product }) => {
  const [cartItems, setCartItems] = useRecoilState(cartAtom)
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity => quantity -= 1)
    }
  }

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity => quantity += 1)
    }
  }

  const addCart = () => {
    const found = cartItems.find(item => item.id === product.id)

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
        {console.log(cartItems)}
        <main className="my-8 font-karla text-lg">
        <div className="px-6">
            <div className="md:flex">
                <div className="w-full">
                  <img src={product.images[0]} />
                </div>
                <div className="w-full max-w-lg mx-auto sm:mt-8 md:ml-14 md:w-1/2 justify-between text-3xl">
                    <h1>{product.name}</h1>
                    <h2 className='text-sm my-2'>{product.desc}</h2>
                    <h1 className="my-4">${product.price}.00</h1>
                    <div className='text-center bg-black rounded-3xl mt-5'>
                      <button 
                        className='hover:cursor-pointer text-white py-2'
                        onClick={() => addCart()}
                      >Add to Cart</button>
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
  const { data: product } = await axios.get(`http://localhost:4000/api/product/${id}`)

  return {
    props: { product }
  }
}

// get every product for each and every single product path
export const getStaticPaths = async () => {
  const { data } = await axios.get('http://localhost:4000/api/products')
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