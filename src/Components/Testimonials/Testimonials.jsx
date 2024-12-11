import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/mgmalumini1.jpg'
import user_2 from '../../assets/mgmalumini2.jpg'
import user_3 from '../../assets/mgmalumini3.jpg'
import user_4 from '../../assets/mgmalumini4.jpg'

const Testimonials = () => {


    const slider = useRef();
    let tx=0;

const slideForward = ()=>{
     if(tx > -50){
        tx -= 25;
     }
     slider.current.style.transform = `translateX(${tx}%)` ;
}

const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
     }
     slider.current.style.transform = `translateX(${tx}%)` ;
}



  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Bal Gurupreet Kaur</h3>
                            <span>B.E. (CSE) Software Technologist, Newyork, U.S.A.</span>
                        </div>
                    </div>
                    <p>It has been a great honour studying at the institution with lot’s unforgettable moments. I always cherish them.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Gaurav Anand </h3>
                            <span>B.E. (EXT) Teritory Manager, Wipro</span>
                        </div>
                    </div>
                    <p>Studying in this August institution gave me the strong foundation and ingredients to be successful in life. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Lt. Shivanand Darbastwar</h3>
                            <span>B.E.(ECT) Indian Navy</span>
                        </div>
                    </div>
                    <p>I am graduate of MGM CEN of ECT branch. I am working in Indian Navy. I am proud of MGM CEN.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Narendrapal Singh Sidhu</h3>
                            <span>B.E. (CSE) Indian oil, Panipat</span>
                        </div>
                    </div>
                    <p>I thank you MGM CEN for contribution in the development of my career & personality </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
