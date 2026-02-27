import React from 'react'
import { Navbar, Footer } from '../../components';
import { Header, Info, Photos } from '../Home'

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <Info />
      <Photos />
      <Footer />
    </div>
  )
}