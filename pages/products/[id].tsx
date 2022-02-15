import React, { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useRecoilState } from 'recoil'
import cartAtom from '../../state/atoms'
import Image from 'next/image'

const Product = ({ product }) => {
  const [cartItem, setCartItem] = useRecoilState(cartAtom)
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

  const handleAddCart = () => {
    setCartItem(oldCartItems => [
      ...oldCartItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        size: 'large',
        quantity,
        images: product.images
      }
    ])
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
                  {product["images"].map((item, index) => (
                    <img src={item} />
                  ))}
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h1>{product.name}</h1>
                    <h2 className='text-sm my-2'>{product.desc}</h2>
                    <span className="mt-3">${product.price}.00</span>
                    <div className="mt-2">
                        <div className="flex items-center mt-1">
                            <button onClick={() => {decreaseQuantity()}}>
                              <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <h1 className='mx-2'>{quantity}</h1>
                            <button onClick={() => {increaseQuantity()}}>
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className='text-center'>
                      <button className='hover:cursor-pointer'>Add to Cart</button>
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