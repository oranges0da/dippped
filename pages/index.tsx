import type { NextPage } from 'next'
import Head from 'next/head'
import ProductCard from '../components/product/ProductCard'
import { motion } from 'framer-motion'

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
      className='bg-pink border-b-2 border-pink align-center'
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <div className='bg-pink text-center pb-7 w-full'>
        <div className='flex justify-center'>
          <div className='flex-col'>
            <img src='https://i.imgur.com/o7C8Yx1.jpg' />
          </div>
        </div>
        <h1 className='font-quando text-2xl pt-12 px-20 md:pt-20 md:text-4xl'>
          Give a Gift That Leaves a Lasting Impression
        </h1>
        <h2 className='pt-6 px-20 font-karla md:text-xl md:pb-14'>
          A unqiue gift that will leave recipeients <br />
          feeling happy, excited, and surprised.
          With our dipped treats, you will get a <br />
          quality assortment that looks impressive
          and tastes great.
        </h2>
      </div>
    </motion.div>
    <h1 className='md:ml-10 md:mt-10 ml-4 mt-6 font-quando text-2xl'>Bestsellers</h1>
    <div className='sm:flex flex-wrap md:mx-6'>
      {BestSellerData.map((item, index) => (
        <div key={index} className='basis-1/3'>
          <ProductCard id={item.id} title={item.title} price={1} image={item.image} showPrice={false} showArrow={true} />
        </div>
      ))}
    </div>
    </>
  )
}

export default Home;