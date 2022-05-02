import Link from 'next/link'
import { CgArrowLongRight } from 'react-icons/cg'
import { motion } from 'framer-motion'

interface HomeProductCardProps {
  title: string,
  price: number,
  image: string,
  showPrice: boolean,
  showArrow: boolean
}

// mini product card component to use throughout app
const HomeProductCard: React.FC<HomeProductCardProps> = ({ title, price, image, showPrice, showArrow }) => {
  return (
    <>
      <motion.div 
        className='hover:cursor-pointer mt-8 font-karla font-semibold rounded mx-2 overflow-hidden'
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
      >
        <motion.img 
          src={image}
          className='hover:scale-110 transition-all duration-500'
        />
      </motion.div>
      <div className='flex justify-between mx-2 bg-pink'>
        <h1 className='font-quando text-sm mt-1'>{title}</h1>
        {showPrice && <h1>${price}.00</h1>}
        {showArrow && <CgArrowLongRight className='mt-1 mr-1 sm:hover:scale-125 transition-all' />}
      </div>
    </>
  )
}

export default HomeProductCard;