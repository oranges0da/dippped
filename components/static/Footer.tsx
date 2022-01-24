import React from 'react'
import NavButton from '../utils/NavButton'
import fb from '../../assets/fb.png'
import Image from 'next/image'
import tiktok from '../../assets/tiktok.png'

const socialLinksSize = 30;

const Footer: React.FC = () => {
  return (
    <div className='border-t border-gray my-6 font-karla'>
      <ul className='md:flex justify-center my-10'>
        <FooterButton path='/about' name='About' />
        <FooterButton path='/contact' name='Contact' />
        <FooterButton path='/refunds' name='Refunds and Cancellations' />
        <FooterButton path='/privacy' name='Privacy Policy' />
        <FooterButton path='/faq' name='FAQ' />
      </ul>
      <div className='flex md:justify-end justify-center'>
        <Image src={fb} height={socialLinksSize} width={socialLinksSize} />
        <Image src={tiktok} height={socialLinksSize} width={socialLinksSize} />
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
    <li className='mr-5'>
      <NavButton path={path} name={name} />
    </li>
  )
}

export default Footer