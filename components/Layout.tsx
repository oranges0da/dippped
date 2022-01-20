import React from 'react'
import NavBar from './static/NavBar'
import Head from 'next/head'
import Footer from './static/Footer'

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