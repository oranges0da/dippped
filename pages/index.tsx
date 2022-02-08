import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavButton from '../components/utils/NavButton'
import axios from 'axios'
import Link from 'next/link'

const BestSellerData = [
  {
    title: "Valentine's Day Box",
    price: 40,
    image: 'https://i.imgur.com/R1YVxMF.jpg'
  }, {
    title: "Mini Wedding Box",
    price: 20,
    image: 'https://i.imgur.com/yYptDSk.jpg'
  }
]

const Home: NextPage = ({ props }) => {
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
    {BestSellerData.map((item, index) => (
      <div key={index}>
        <BestsellerCard title={item.title} price={item.price} image={item.image} />
      </div>
    ))}
    </div>
    </>
  )
}

// overlay on image "shop now" button
const ShopNowButton: React.FC = () => {
  return (
    <div className="relative ">
      <img src='https://i.imgur.com/5b2t7sF.jpg' />
    </div> 
  )
}

interface BestsellerCardProps {
  title: string,
  price: number,
  image: string
}

// bestsellers
const BestsellerCard: React.FC<BestsellerCardProps> = ({ title, price, image }) => {
  return (
    <Link href='/products'>
      <div className='hover:cursor-pointer'>
        <Image src={image} width={100} height={100} />
        <h1>{title}</h1>
        <h1>{price}</h1>
      </div>
    </Link>
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