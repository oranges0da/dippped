import { NextPage } from 'next'
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import Head from 'next/head'

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
              name={item.name} 
              price={item.price}
              image={item.images[0]}/>
          ))}
        </div>
      </div>
    </>
  )
}

interface ProductCardProps {
  name: string,
  price: number,
  image: string
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className='basis-1/2 mx-5 bg-pink rounded-sm'>
      <img src={image} />
      <h1 className='font-bold my-2'>{name}</h1>
      <h1>${price - 0.1}9</h1>
    </div>
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
