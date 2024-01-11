import React from 'react'
import './HeroStyles.css'

import Video from '../Assests/Drink.mp4'

function Hero() {
  return (
    <div className='hero'>
        {/*Displays video and loops it*/}
        <video autoPlay loop muted id='video' data-testid='hero-video'>
            <source src={Video} type='video/mp4'/>
        </video>
        <div className='overlay'></div>
    </div>
  )
}

export default Hero