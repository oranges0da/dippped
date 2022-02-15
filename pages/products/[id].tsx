import React, { useContext } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useRecoilState } from 'recoil'
import cartAtom from '../../state/atoms'

const Product = ({ product }) => {
  const [cartItem, setCartItem] = useRecoilState(cartAtom)

  const handleAddCart = () => {
    setCartItem(oldCartItems => [
      ...oldCartItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        size: 'large',
        quantity: 1,
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
                    <h3 className="text-gray-700 text-lg">{product.name}</h3>
                    <span className="text-gray-500 mt-3">${product.price}.00</span>
                    <hr className="my-3" />
                    <div className="mt-2">
                        <div className="flex items-center mt-1">
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                              <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <span className="text-gray-700 text-lg mx-2">{product.quantity}</span>
                            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <label className="text-gray-700 text-sm">Color:</label>
                        <div className="flex items-center mt-1">
                            <button className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
                            <button className="h-5 w-5 rounded-full bg-gray mr-2 focus:outline-none"></button>
                            <button className="h-5 w-5 rounded-full bg-gray mr-2 focus:outline-none"></button>
                        </div>
                    </div>
                    <div className="flex items-center mt-6">
                        <button className="text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                            <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </button>
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