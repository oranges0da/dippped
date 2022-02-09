import Link from 'next/link'

interface ProductCardProps {
  title: string,
  price: number,
  image: string
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <Link href='/products'>
      <div className='hover:cursor-pointer mt-8 mx-4 bg-pink font-karla font-bold rounded'>
        <img src={image} />
        <div className='flex justify-between mx-3 px-2 pt-4 pb-4'>
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard;