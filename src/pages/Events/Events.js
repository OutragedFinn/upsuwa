import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Info } from '../Events';

export default function Events() {
  return (
    <div className="Events">
      <Navbar />
      <Info />
      <Footer />
      
    </div>
  )
}