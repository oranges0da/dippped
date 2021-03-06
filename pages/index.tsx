import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import HomeProductCard from '../components/product/HomeProductCard'
import Link from 'next/link'
import ShopButton from '../components/home/ShopButton'

// data for bestseller section of home page
const BestSellerData = [
  {
    id: 1,
    title: "Valentine's Day Box",
    image: 'https://i.imgur.com/mpfO7bt.jpg'
  }, {
    id: 2,
    title: "White Chocolate Box",
    image: 'https://i.imgur.com/27Js6h4.jpg'
  }, {
    id: 5,
    title: "Chocolate Lover's Box",
    image: 'https://i.imgur.com/87XyYFa.jpg'
  }, {
    id: 4,
    title: "Wedding Box",
    image: 'https://i.imgur.com/ALiZFnz.jpg'
  }, {
    id: 3,
    title: "Mini Wedding Box",
    image: 'https://i.imgur.com/0aDE5Yk.jpg'
  }, {
    id: 6,
    title: "Chocolate Lover's (Heart Box)",
    image: "https://i.imgur.com/ORQGPwt.jpg"
  }
]

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Dippped</title>
    </Head>
    <motion.div 
      className='bg-pink border-b-2 border-pink align-center md:scale-150 pb-10'
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <div className='flex justify-center align-center lg:my-20 py-20 text-center bg-hero'>
        <div className='flex-col lg:my-20 py-20'>
          <div className='py-16 mt-10'>
            <ShopButton />
          </div>
        </div>
      </div>
      <div className='lg:mt-20 mt-10 text-center'>
        <h1 className='font-quando text-2xl px-20 lg:text-md lg:mt-20'>
          Give a Gift That Leaves a Lasting Impression
        </h1>
        <h2 className='pt-5 font-karla md:text-xs px-12'>
          A unqiue gift that will leave recipeients <br />
          feeling happy, excited, and surprised.
          With our dipped treats, you will get a <br />
          quality assortment that looks impressive
          and tastes great.
        </h2>
      </div>
    </motion.div>
    <div className='md:mt-20 md:pt-4'>
      <h1 className='md:ml-10 md:mt-20 md:pt-20 ml-4 mt-6 font-quando text-2xl'>Bestsellers</h1>
      <div className='sm:flex flex-wrap md:mx-6'>
        {BestSellerData.map((item, index) => (
          <Link href={`/products/${item.id}`}>
            <div key={index} className='basis-1/3'>
              <HomeProductCard title={item.title} price={1} image={item.image} showPrice={false} showArrow={true} />
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}

export default Home;