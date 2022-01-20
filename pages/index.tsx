import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import homePic from '../assets/dippedHome.jpeg' // 1280 x 853
import trayBerries from '../assets/trayBerries.jpeg'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Dipped Home</title>
    </Head>
    <div>
    <div className='inline bg-pink border-b-2 border-pink'>
        <Image src={homePic} />
      <div className='bg-pink text-center pb-7'>
        <h1 className='font-quando text-2xl pt-12 pl-10 pr-10'>
          Give a Gift That Leaves a Lasting Impression
        </h1>
        <h2 className='pt-6 px-20 font-karla'>
          A unqiue gift that will leave recipeients 
          feeling happy, excited, and surprised. 
          With our dipped treats, you will get a
          quality assortment that looks impressive
          and tastes great.
        </h2>
      </div>
    </div>
    <h1 className='mt-5 ml-4 font-quando text-2xl'>Bestsellers</h1>
    </div>
    </>
  )
}

const ProductCard = () => {
  return (
    <div>
      product card
    </div>
  )
}

export default Home