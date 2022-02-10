import React from 'react'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <div className='border-t border-gray my-6 font-karla text-sm'>
      <div className='flex md:justify-end justify-center mr-5 my-14'>
        <FooterButton source='https://i.imgur.com/fo9OVTB.png' size={38} path='https://www.facebook.com' />
        <FooterButton source='https://i.imgur.com/buM9fEc.png' size={35} path='https://www.tiktok.com' />
        <FooterButton source='https://i.imgur.com/E5t7hMe.png' size={36} path='https://www.instagram.com' />
      </div>
    </div>
  )
}

interface FooterButtonProps {
  source: string;
  path: string;
  size: number;
}

const FooterButton: React.FC<FooterButtonProps> = ({ source, path, size }) => {
  return (
    <a href={path} className='mx-2 sm:hover:scale-110' rel="noopener noreferrer">
      <Image src={source} height={size} width={size} />
    </a>
  )
}

export default Footer