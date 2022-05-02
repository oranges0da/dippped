import Link from 'next/link'
import { CgArrowLongRight } from 'react-icons/cg'
import { motion } from 'framer-motion'

interface MainProductCardProps {
  id: number,
  title: string,
  price: number,
  image: string,
  showPrice: boolean,
  showArrow: boolean
}

// mini product card component to use throughout app
const MainProductCard: React.FC<MainProductCardProps> = ({ id, title, price, image, showPrice, showArrow }) => {
  return (
    <Link href={`products/${id}`}>
      <motion.div 
        className='hover:cursor-pointer mt-8 bg-white font-karla font-semibold rounded mx-2'
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
      >
        <motion.img 
          src={image} 
        />
        <div className='flex-col ml-1 pt-4 pb-4'>
          <h1 className='font-quando text-sm mt-1'>{title}</h1>
          {showPrice && <h1>${price}.00</h1>}
          {showArrow && <CgArrowLongRight className='mt-1 mr-1 sm:hover:scale-125 transition-all' />}
        </div>
      </motion.div>
    </Link>
  )
}

export default MainProductCard;