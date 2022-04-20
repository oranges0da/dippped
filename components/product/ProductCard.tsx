import Link from 'next/link'
import { CgArrowLongRight } from 'react-icons/cg'

interface ProductCardProps {
  id: number,
  title: string,
  price: number,
  image: string,
  showPrice: boolean,
  showArrow: boolean
}

// mini product card component to use throughout app
const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image, showPrice, showArrow }) => {
  return (
    <Link href={`products/${id}`}>
      <div className='hover:cursor-pointer mt-8 bg-pink font-karla font-bold rounded mx-4'>
        <img src={image} />
        <div className='flex justify-between mx-3 px-2 pt-4 pb-4'>
          <h1 className='font-quando text-sm'>{title}</h1>
          {showPrice && <h1>${price}.00</h1>}
          {showArrow && <CgArrowLongRight className='mt-1 mr-1 hover:scale-125 transition-all' />}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard;