import React from 'react'
import axios from 'axios'

const Product = ({ product }) => {
  return (
    <div>
      {product.name}
    </div>
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