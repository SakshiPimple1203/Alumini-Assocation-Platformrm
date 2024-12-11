import React from 'react'
import './About.css'
import about_img from '../../assets/mgmabout.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
      <img src={about_img} alt="" className='about_img' />
      <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
      <h3>ABOUT COLLEGE</h3>
      <h2>Nurturing Tommorow's Leaders Today</h2>
      <p>Mahatma Gandhi Mission, that started its journey in a modest way with a rural healthcare center at Nila and a hospital in Nanded, has emerged as a 5000-member family with more than 50 educational institutions, health-care centers and social-welfare units functioning under its umbrella at 5 centers i.e. Aurangabad, Nanded, Navi Mumbai, Noida and Parbhani. Spanning a period of 35 years, MGM establishments prove the deep faith of her management in the power of education that leads the society towards prosperity of the Nation</p>
      <p>Mahatma Gandhi Mission has endeavored providing value-based education in all streams of knowledge like Engineering, Medicine, Dental, Nursing, Management, Law, Mass Communication & Journalism, Library Science, Computer Science, Biotechnology, Bioinformatics, Fine Art, Indian classical dance with state-of-the-art technology and infrastructure.</p>
      </div>
    </div>
  )
}

export default About
