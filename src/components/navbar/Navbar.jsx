import React, { useState } from 'react'

import "./navbar.css"
import { useLocation } from 'react-router-dom';
//Electricity Market Advisory Services

export default function Navbar() {

  const Menu = () => (
    <>
    <div className='emas__navbar-links_menu'>
        <div>
            <a href="../">Home</a>
        </div>
        <div>
          <a href="../Events">Events</a>
        </div>
        <div>
          <a href="../Our-Sponsors">Our Sponsors</a>
        </div>
        <div>
            <a href="../Resources">Resources</a>
        </div>
        <div>
            <a href="../Contact-Us">Contact Us</a>
        </div>
    </div>
    </>
  )

  

  return (
    <div className="ups__navbar">
      <div className='emas__navbar-heading'>
        <img src="./assets/logo.png" alt="UPS logo" />
        <h1>U P S</h1>
      </div>
      <div className='emas__navbar-links'>
        <Menu />
      </div>
    </div>
  )
}
