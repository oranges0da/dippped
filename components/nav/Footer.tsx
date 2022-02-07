import React from 'react'
import NavButton from '../utils/NavButton'
import LogoIcon from '../utils/LogoIcon'

const Footer: React.FC = () => {
  return (
    <div className='border-t border-gray my-6 font-karla text-sm'>
      <div className='flex md:justify-end justify-center mr-5 my-14'>
        <LogoIcon source='https://i.imgur.com/fo9OVTB.png' size={32} path='/' />
        <LogoIcon source='https://i.imgur.com/buM9fEc.png' size={29} path='/' />
        <LogoIcon source='https://i.imgur.com/E5t7hMe.png' size={30} path='/' />
      </div>
    </div>
  )
}

interface FooterButtonProps {
  name: string;
  path: string;
}

const FooterButton: React.FC<FooterButtonProps> = ({ name, path }) => {
  return (
    <li className='mr-8 my-7 md:ml-2 ml-7'>
      <NavButton path={path} name={name} />
    </li>
  )
}

export default Footer