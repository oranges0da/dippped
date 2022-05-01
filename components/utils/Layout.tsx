import React from 'react'
import NavBar from '../nav/NavBar'
import Head from 'next/head'
import Footer from '../nav/Footer'

// main web layout
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className='md:mx-20' >
        <main>
          { children }
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout