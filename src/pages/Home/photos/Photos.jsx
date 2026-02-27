
import {useState, React, useEffect } from 'react'
import "./photos.css"

export default function Photos() {

  return (
    <div className='ups__home-photos'>
        <div className='ups__home-photos_container'>
           <div className="ups__home-photos_container-photogrid">
                <div className="ups__home-photos_container-photogrid-photo"><img src="/assets/demos1.jpg" alt="Photo 1"/></div>
                <div className="ups__home-photos_container-photogrid-photo"><img src="/assets/demos2.jpg" alt="Photo 2"/></div>
                <div className="ups__home-photos_container-photogrid-photo"><img src="/assets/demos4.jpg" alt="Photo 3"/></div>
                <div className="ups__home-photos_container-photogrid-photo"><img src="/assets/astro1.jpg" alt="Photo 4"/></div>
                <div className="ups__home-photos_container-photogrid-photo"><img src="/assets/header.jpg" alt="Photo 5"/></div>
                <div className="ups__home-photos_container-photogrid-photo"><img src="/assets/tea1.jpg" alt="Photo 6"/></div>
                {/* <div className="photo"><img src="/assets/demos2.jpg" alt="Photo 2"/></div>
                <div className="photo"><img src="/assets/photo3.jpg" alt="Photo 3"/></div>
                <div className="photo"><img src="/assets/photo4.jpg" alt="Photo 4"/></div>
                <div className="photo"><img src="/assets/photo5.jpg" alt="Photo 5"/></div>
                <div className="photo"><img src="/assets/photo6.jpg" alt="Photo 6"/></div> */}
            </div>
        </div>
    </div>
  )
}
