import React from 'react'
import NavBar from '../nav/NavBar'
import Head from 'next/head'
import Footer from '../nav/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>
        { children }
      </main>
      <Footer />
    </>
  )
}

export default Layout