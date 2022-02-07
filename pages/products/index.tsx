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
      <div>
        <h1 className='ml-5'>Products</h1>
        <h2>Our Catalogue of Products</h2>
        {products.map((item, index) => (
          <ProductCard 
            name={item.name} 
            price={item.price}
            image={item.images[index]}/>
        ))}
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
    <div>
      <Image src={image} height={100} width={100} />
      <h1>{name}</h1>
      <h1>{price}</h1>
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
