import React from 'react'
import NavButton from '../utils/NavButton'

const Footer: React.FC = () => {
  return (
    <div className='border-t border-gray my-6 font-karla'>
      <ul className='md:flex mt-2 justify-center'>
        <FooterButton path='/about' name='About' />
        <FooterButton path='/contact' name='Contact' />
        <FooterButton path='/refunds' name='Refunds and Cancellations' />
        <FooterButton path='/privacy' name='Privacy Policy' />
        <FooterButton path='/faq' name='FAQ' />
      </ul>
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