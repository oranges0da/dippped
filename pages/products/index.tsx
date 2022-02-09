import { NextPage } from 'next'
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import Head from 'next/head'
import ProductCard from '../../components/product/ProductCard'

const url = 'http://localhost:4000/api/products'

const Product: NextPage = ({ products }: any) => {
  return (
    <>
      <Head>
        <title>Products - Dippped</title>
      </Head>
      <div className='font-karla'>
        <h1 className='ml-5 mt-10 text-4xl font-ubuntu'>Shop</h1>
        <h2 className='ml-5 my-5'>Our Catalogue of Products.</h2>
        <div className='flex-wrap'>
          {products.map(item => (
            <ProductCard 
              title={item.name} 
              price={item.price}
              image={item.images[0]}
              showPrice={true} />
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get(url)
  const products = data.products
  
  return {
    props: {
      products
    }
  }
}

export default Product
