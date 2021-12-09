import React from 'react'
import Image from './jo-min.png'
import './hero.css'
const Hero = () => (
  <div className='hero-container'>
    <img className='background-image' src={Image} />

    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          Asquith Executive Consulting
        </div>
        <div className='col-md-6'>
          test
          {/* <img className='hero-image-main' src={Image} /> */}
        </div>
      </div>
    </div>
    <div className='wave-container'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path fill='rgba(33,150,243,1)' fillOpacity='1' d='M0,224L40,192C80,160,160,96,240,90.7C320,85,400,139,480,160C560,181,640,171,720,144C800,117,880,75,960,64C1040,53,1120,75,1200,74.7C1280,75,1360,53,1400,42.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z' />
      </svg>
    </div>
  </div>
)

export default Hero
