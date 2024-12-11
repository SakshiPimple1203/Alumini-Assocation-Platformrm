import React from 'react'
import './Three.css'
import gallry_1 from '../../assets/mgmgallery1.jpg'
import gallry_2 from '../../assets/mgmgallery2.jpg'
import gallry_3 from '../../assets/mgmgallery3.jpg'
import gallry_4 from '../../assets/mgmgallery4.jpg'
import white_arrow from '../../assets/white-arrow.png'


const Three = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallry_1} alt="" />
            <img src={gallry_2} alt="" />
            <img src={gallry_3} alt="" />
            <img src={gallry_4} alt="" />
        </div>
      <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Three
