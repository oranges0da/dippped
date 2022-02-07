import Image from 'next/image';
import hamburg from '../../assets/hamburg3.png'
import cartIcon from '../../assets/cartIcon2.png'
import NavButton from '../utils/NavButton';
import LogoIcon from '../utils/LogoIcon';
import lightLogo from '../../assets/longAngleBerry.png'

// various sizes for icons
const cartSize = 75
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
    <nav className="py-8 sticky top-0 z-[1000] bg-white font-karla border-b border-gray">
      <div className="flex justify-between">
        <div className="flex align-center lg:order-2">
          <button  type="button" className="mobile-menu-button inline-flex items-center mr-4 text-sm sm:hover:scale-110 hover:cursor-pointer ml-6 rounded-lg lg:hidden hover" aria-controls="mobile-menu-2" aria-expanded="false">
            <Image src='https://i.imgur.com/h664CAz.png' height={50} width={50} />
          </button>
        </div>
        <div className='lg:mr-20 mr-3'>
          <LogoIcon source='https://i.imgur.com/peLRaic.png' size={logoSize} path='/' />
        </div>
        <div className="hidden items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex mt-4 lg:flex-row lg:space-x-8 lg:ml-20 lg:mt-0 lg:text-sm lg:font-medium">
            <li>
              <NavButton path='/' name='Home' />
            </li>
            <li>
              <NavButton path='/products' name="Shop" />
            </li>
            <li>
              <NavButton path='/about' name="About" />
            </li>
            <li>
              <NavButton path='/contact' name="Contact" />
            </li>
            <li>
              <NavButton path='/privacy' name="Privacy Policy" />
            </li>
            <li>
              <NavButton path='/refunds' name="Refunds" />
            </li>
            <li>
              <NavButton path='/faq' name="FAQ" />
            </li>
          </ul>
          </div>
          <div className="items-center lg:flex lg:order-2 lg:mr-2">
            <LogoIcon source='https://i.imgur.com/IfvSH09.jpg' size={cartSize} path='/cart' />
          </div>
      </div>
      <div className='mobile-menu hidden'>
        <ul className='flex-row text-center my-7 lg:hidden'>
          <MobileNavButton name='Home' path='/' />
          <MobileNavButton name="Shop" path='/products' />  
          <MobileNavButton name='About' path='/about' />  
          <MobileNavButton name='Contact' path='/contact' />  
          <MobileNavButton name='Privacy Policy' path='/privacy' />
          <MobileNavButton name='Refunds' path='/refunds' />
          <MobileNavButton name='FAQ' path='/faq' />
        </ul>
      </div>
    </nav>
  );
};

interface MobileNavButtonProps {
  name: string;
  path: string;
}

const MobileNavButton: React.FC<MobileNavButtonProps> = ({ name, path }) => {
  return (
    <li className='ml-1 my-4'>
      <NavButton path={path} name={name} />
    </li>
  )
}

export default Navbar