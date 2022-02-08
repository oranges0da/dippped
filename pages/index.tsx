import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavButton from '../components/utils/NavButton'
import axios from 'axios'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Dipped Home</title>
    </Head>
    <div>
    <div className='bg-pink border-b-2 border-pink'>
      <ShopNowButton />
      <div className='bg-pink text-center pb-7'>
        <h1 className='font-quando text-2xl pt-12 pl-10 pr-10'>
          Give a Gift That Leaves a Lasting Impression
        </h1>
        <h2 className='pt-6 px-20 font-karla md:mx-20'>
          A unqiue gift that will leave recipeients 
          feeling happy, excited, and surprised. 
          With our dipped treats, you will get a
          quality assortment that looks impressive
          and tastes great.
        </h2>
      </div>
    </div>
    <h1 className='md:ml-10 md:mt-10 ml-4 mt-6 font-quando text-2xl'>Bestsellers</h1>
    </div>
    </>
  )
}

// overlay on image "shop now" button
const ShopNowButton = () => {
  return (
    <div className="relative ">
      <img src='https://i.imgur.com/5b2t7sF.jpg' />
    </div> 
  )
}

// bestsellers
const BestsellerCard = ({ props }) => {
  return (
    <div>

    </div>
  )
}

// to get "bestseller" product data
const getStaticProps = async () => {
  const { data } = await axios.get('http://localhost:4000/api/products')
  const products = data.products;

  return {
    props: {}
  }
}

export default Home