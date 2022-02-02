import { NextPage } from 'next'
import React from 'react'
import axios from 'axios'
import Image from 'next/image'

const url = 'http://localhost:4000/api/products'

const Product: NextPage = ({ products }: any) => {
  return (
    <div>
      {products.map((item, index) => (
        <ProductCard 
          name={item.name} 
          price={item.price}
          image={item.images[0]}/>
      ))}
    </div>
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
