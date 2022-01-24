import Link from 'next/link';
import Image from 'next/image';
import chocoBar from '../../assets/chocoBar.png'
import hamburg from '../../assets/hamburg3.png'
import homePic from '../../assets/dippedHome.jpeg'
import cartIcon from '../../assets/cartIcon2.png'
import NavButton from '../utils/NavButton';
import LogoIcon from '../utils/LogoIcon';

// various sizes for icons
const cartSize = 75
const hamburgSize = 40
const logoSize = 65

// toggle mobile navbar
if (typeof window === 'object') {
  const btn = document.querySelector('button.mobile-menu-button')
  const menu = document.querySelector('.mobile-menu')
  
  btn?.addEventListener('click', () => {
    menu?.classList.toggle("hidden")
  })
}

export const Navbar: React.FC = () => {
  return (
    <nav className="py-8 sticky top-0 z-[1000] bg-white font-karla">
      <div className="flex justify-between">
        <div className="flex align-center lg:order-2">
          <button  type="button" className="mobile-menu-button inline-flex items-center mr-4 text-sm sm:hover:scale-110 hover:cursor-pointer ml-6 rounded-lg lg:hidden hover" aria-controls="mobile-menu-2" aria-expanded="false">
            <Image src={hamburg} height={50} width={50} />
          </button>
        </div>
        <div className='lg:mr-20'>
          <LogoIcon source={chocoBar} size={logoSize} path='/' />
        </div>
        <div className="hidden items-center w-full lg:flex lg:w-auto lg:order-1">
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
          <div className="items-center lg:flex lg:order-2 lg:mr-2">
            <LogoIcon source={cartIcon} size={cartSize} path='/' />
          </div>
      </div>
      <div className='mobile-menu hidden'>
        <ul className="">
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
    </nav>
  );
};

export default Navbar