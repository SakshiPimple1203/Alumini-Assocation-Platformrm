import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/arrow-removebg-preview (1).jpg'

const Hero = () => {
  return (
    <div className='hero container'> 
    <div className='hero-text'>
        <h1>We Ensure Better Education</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta asperiores quia aperiam nesciunt accusantium dicta a cum, excepturi dolor. Minus voluptate porro provident distinctio et laboriosam! Mollitia error animi ratione.</p>
        <button className='btn'>Explore More<img src={dark_arrow}></img></button>
    </div>
    </div>
  )
}

export default Hero
