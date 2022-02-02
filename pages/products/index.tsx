import { NextPage } from 'next'
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import Head from 'next/head'

const url = 'http://localhost:4000/api/products'

const Product: NextPage = ({ product }: any) => {
  return (
    <>
      <Head>
        <title>Shop - Dippped</title>
      </Head>
      <div>
        <h1>{product.data[0].name}</h1>
        <img src={product.data[0].image[0] as string} width={200} height={200} />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const {data} = await axios.get(url)
  
  return {
    props: {
      product: data
    }
  }
}

export default Product