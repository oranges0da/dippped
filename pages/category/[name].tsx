import React from 'react'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const categoriesUrl = 'http://localhost:4000/api/categories'
const categoryUrl = 'http://localhost:4000/api/category'

const Category: NextPage = ({ category }) => {
  return (
    <div>
      category page
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  // get one category with id
  const { data: category } = await axios.get(categoryUrl, {
    headers: {
      id: params.id
    }
  }).catch(err => {throw new Error(err)})

  return {
    props: {
      category
    }
  }
}

// get all categories at build time
export const getStaticPaths = async () => {
  //get all categories for each path
  const { data: categories } = await axios.get(categoriesUrl)

  return {
    paths: categories.map(item => {
      return {
        params: {
          id: item.id,
          name: item.name
        }
      }
    })
  }
}

export default Category
