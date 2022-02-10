import Link from 'next/link'

interface ProductCardProps {
  id: number,
  title: string,
  price: number,
  image: string,
  showPrice: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image, showPrice }) => {
  return (
    <Link href={`products/${id}`}>
      <div className='hover:cursor-pointer mt-8 mx-4 bg-pink font-karla font-bold rounded'>
        <img src={image} />
        <div className='flex justify-between mx-3 px-2 pt-4 pb-4'>
          <h1>{title}</h1>
          {showPrice && <h1>${price}.00</h1>}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard;