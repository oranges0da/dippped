import Link from 'next/link';
import Image from 'next/image';
import chocoBar from '../../assets/chocoBar.png'
import hamburg from '../../assets/hamburg3.png'
import homePic from '../../assets/dippedHome.jpeg'
import cartIcon from '../../assets/cartIcon2.png'
import NavButton from '../utils/NavButton';

// various sizes for icons
const cartSize = 75
const hamburgSize = 40
const logoSize = 65

export const Navbar: React.FC = () => {
  return (
    <nav className="py-8 sticky top-0 z-[1000] bg-white font-karla">
      <div className="flex justify-between">
        <div className="flex align-center lg:order-2">
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center mr-4 text-sm text-gray-500 rounded-lg lg:hidden hover" aria-controls="mobile-menu-2" aria-expanded="false">
              <LogoIcon source={hamburg} size={hamburgSize} />
            </button>
        </div>
        <div className='lg:mr-20'>
          <LogoIcon source={chocoBar} size={logoSize} />
        </div>
        <div className="hidden items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul className="flex mt-4 lg:flex-row lg:space-x-8 lg:ml-20 lg:mt-0 lg:text-sm lg:font-medium">
            <li>
              <NavButton path='/' name='Home' />
            </li>
            <li>
              <NavButton path='/valentines' name="Valentine's Day" />
            </li>
            <li>
              <NavButton path='/wedding' name='Wedding' />
            </li>
            <li>
              <NavButton path='/bouquet' name='Bouquet' />
            </li>
          </ul>
          </div>
          <div className="items-center lg:flex lg:order-2 lg:mr-2" id="mobile-menu-2">
            <LogoIcon source={cartIcon} size={cartSize} />
          </div>
      </div>
    </nav>
  );
};

interface LogoProps {
  source: StaticImageData,
  size: number
}

// logo icons on either sides of navbar
const LogoIcon: React.FC<LogoProps> = ({ source, size }) => {
  return (
    <div className='sm:hover:scale-110 hover:cursor-pointer ml-6'>
      <Link href='/'>
        <Image src={source} width={size} height={size} className="mx-auto" />
      </Link>
  </div>

  )
}

export default Navbar