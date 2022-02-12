import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import ProductCard from '../../components/product/ProductCard'
import Head from 'next/head'

const Product = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.name} - Dipped </title>
      </Head>
      <div>
        {product.id}
        {product.name}
        {product.desc}
        {product["images"].map((item, index) => (
          <div className='m-20 sm:flex flex-wrap'>
            <img src={item} className='basis-1/3' />
          </div>
        ))}
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