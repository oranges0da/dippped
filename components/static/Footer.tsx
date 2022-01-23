import React from 'react'
import Link from 'next/link'
import NavButton from '../NavButton'

const Footer: React.FC = () => {
  return (
    <div className='border-t border-gray my-6 font-karla'>
      <ul className='md:flex mt-2 justify-center'>
        <li className=''>
          <NavButton path='/about' name='About' />
        </li>
        <li>
          <NavButton path='/contact' name='Contact' />
        </li>
        <li>
          <NavButton path='/faq' name='FAQ' />
        </li>
      </ul>
    </div>
  )
}

export default Footer
