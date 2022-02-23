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
    setCartItems(oldCartItems => [
      ...oldCartItems, {
        id: product.id,
        name: product.name,
        price: product.price,
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
        {console.log(cartItems)}
        <main className="my-8 font-karla text-lg">
        <div className="px-6">
            <div className="md:flex">
                <div className="w-full">
                  {product["images"].map((item, index) => (
                    <img src={item} className='my-10 sm:ml-10 rounded-sm'/>
                  ))}
                </div>
                <div className="w-full max-w-lg mx-auto sm:mt-8 md:ml-14 md:w-1/2 justify-between text-3xl">
                    <h1>{product.name}</h1>
                    <h2 className='text-sm my-2'>{product.desc}</h2>
                    <h1 className="my-4">${product.price}.00</h1>
                    <div className="mt-2">
                        <div className="flex items-center mt-1">
                            <button onClick={() => {decreaseQuantity()}}>
                              <svg className="h-8 w-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <h1 className='mx-2'>{quantity}</h1>
                            <button onClick={() => {increaseQuantity()}}>
                                <svg className="h-8 w-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
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