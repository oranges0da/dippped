import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const router = useRouter()
const { id } = router.query

const Product = () => {
  return (
    <div>
      this is page {id}
    </div>
  )
}

export const getStaticPaths = async () => {
  const { data } = await axios.get('http://localhost/api/products')
  const products = await data.products;

  return {}
}

export default Product