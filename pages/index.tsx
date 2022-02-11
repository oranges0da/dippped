import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavButton from '../components/utils/NavButton'
import axios from 'axios'
import Link from 'next/link'
import ProductCard from '../components/product/ProductCard'

const BestSellerData = [
  {
    id: 6,
    title: "Valentine's Day Box",
    price: 40,
    image: 'https://i.imgur.com/mpfO7bt.jpg'
  }, {
    id: 8,
    title: "Mini Wedding Box",
    price: 20,
    image: 'https://i.imgur.com/yYptDSk.jpg'
  },
]

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Dipped Home</title>
    </Head>
    <div>
    <div className='bg-pink border-b-2 border-pink align-center'>
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
    <div className='sm:flex flex-wrap md:mx-6'>
      {BestSellerData.map((item, index) => (
        <div key={index} className='basis-1/2'>
          <ProductCard id={item.id} title={item.title} price={item.price} image={item.image} showPrice={false} />
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

// overlay on image "shop now" button
const ShopNowButton: React.FC = () => {
  return (
    <div className="relative ">
      <img src='https://i.imgur.com/pxiPTue.jpg' />
    </div> 
  )
}

export default Home;