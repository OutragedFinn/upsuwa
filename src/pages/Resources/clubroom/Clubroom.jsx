
import {useState, React, useEffect } from 'react'
import "./clubroom.css"

import Enlargeable_Image from '../../../components/enlargeable_image/Enlargeable_Image';

export default function Clubroom() {

  return (
    <div className='ups__resources-clubroom'>
        <div className='ups__resources-clubroom_container'>
            
            <h1>UPS Clubroom</h1>
            <Enlargeable_Image src='/assets/common-room1.webp' className='ups__resources-clubroom_photo' />
            <p>The Physics building (Room 2.19) hosts our common room. We have ping pong tables, a kitchen and ample study and lounge space for club members to enjoy.</p>
            <h3>Store</h3>
            <p>We run a zero-profit store, buying in bulk to supply students with the fuel to keep on studying, at the lowest prices possible. We regularly stock energy drinks, snack bars, frozen meals and more. Pay by cash or bank transfer.</p>
            
        </div>
    </div>
  )
}
