import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import ProductCard from '../../components/product/ProductCard'
import axios from 'axios'

const url = 'http://localhost:4000/products' // api url

const Product: NextPage = ({ products }) => {
  return (
    <>
      <Head>
        <title>Products - Dippped</title>
      </Head>
      <div className='font-karla'>
        <h1 className='md:ml-20 md:mt-10 text-4xl font-ubuntu ml-3 my-8'>Shop</h1>
        <h2 className='md:ml-20 md:mt-12 ml-3 my-4'>Our Catalogue of Products.</h2>
        <div className='sm:flex flex-wrap md:mx-14 md:my-10'>
          {products.map(item => (
            <div className='basis-1/2'>
              <ProductCard
                id={item.id}
                title={item.name} 
                price={item.price}
                image={item.images[0]}
                showPrice={true} 
                showArrow={false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// get every product for each product path from api
export const getStaticProps = async () => {
  const { data } = await axios.get(url)
  const products = await data.products
  
  return {
    props: {
      products
    }
  }
}

export default Product