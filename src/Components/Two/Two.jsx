import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Two.css';
import program_1 from '../../assets/mgmpro1.jpg';
import program_2 from '../../assets/mgmpro2.jpg';
import program_3 from '../../assets/mgmpro3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Two = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Alumni meet</p>
          <p>
            {/* Use Link to navigate to the event registration page */}
            <Link to="/login">Register for an event if available</Link>
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Alumni conference</p>
          <p>
            {/* Use Link to navigate to the event registration page */}
            <Link to="/login">Register for an event if available</Link>
          </p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Alumni guidance</p>
          <p>
            {/* Use Link to navigate to the event registration page */}
            <Link to="/login">Register for an event if available</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Two;
