import { NextPage } from 'next'
import React from 'react'
import axios from 'axios'
import Image from 'next/image'

const url = 'http://localhost:4000/api/products'

const Product: NextPage = ({ products }: any) => {
  return (
    <div>
      <h1>{products[0].name}</h1>
      <Image src={products[0].image[0]} height={100} width={100} />
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get(url)
  const products = data.data
  
  return {
    props: {
      products
    }
  }
}

export default Product
