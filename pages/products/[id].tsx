import React, { useContext } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { CartContext, CartProvider } from '../../context/CartContext'

const Product = ({ product }) => {
  const { state, dispatch } = useContext(CartContext)

  const handleAddCart = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price
      }
    })
    console.log(`Added to cart. Item: ${product.name}`)
  }

  return (
    <>
      <Head>
        <title>{product.name} - Dipped </title>
      </Head>
      <CartProvider>
        <div>
          {product.id}
          {product.name}
          {product.desc}
          <img src={product.images[0]} />
        </div>
        <div>
          <button className='border' onClick={() => handleAddCart()}>add to cart</button>
        </div>
      </CartProvider>
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