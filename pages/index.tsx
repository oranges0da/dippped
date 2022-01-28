import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import homePic from '../assets/dippedHome.jpeg' // 1280 x 853
import trayBerries from '../assets/trayBerries.jpeg'
import valentinesCat from '../assets/heartBerry.jpg'
import weddingBerry from '../assets/weddingBerry.jpg'
import boBerry from '../assets/boBerry.jpeg'
import Link from 'next/link'

const testData = [
  {
    title: "Valentine's Day",
    image: valentinesCat,
    path: 'valentines'
  }, {
    title: "Wedding",
    image: weddingBerry,
    path: 'wedding'
  }, {
    title: "Bouquet Berries",
    image: 'https://images-gmi-pmc.edge-generalmills.com/7b6a8b4e-3426-47fb-901c-796b5c794559.jpg',
    path: 'bouquet'
  }
]

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Dipped Home</title>
    </Head>
    <div>
    <div className='bg-pink border-b-2 border-pink'>
        <Image src={homePic} />
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
    <div className='sm:flex font-karla md:mx-5'>
      {testData.map((item, index) => {
        return (
          <div key={index}>
            <CategoryCard title={item.title} image={item.image} path={item.path}/>
          </div>
        )
      })}
    </div>
    </div>
    </>
  )
}

interface CategoryCardProps {
  title: string;
  image: StaticImageData | string;
  path: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, path }) => {
  return (
    <div className='bg-pink my-8 mx-4 hover:cursor-pointer'>
      <Link href={path}>
          <div>
          <Image src={image} height={500} width={500} />
          <div className='ml-2 pb-2'>
            <h1 className='text-md'>{title}</h1>
          </div>
          </div>
      </Link>
    </div>
  )
}

export default Home