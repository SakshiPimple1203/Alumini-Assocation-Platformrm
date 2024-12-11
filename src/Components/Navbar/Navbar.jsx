import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/MGM_logo.png';
import menue_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  // Function to handle navigation to the register page
  const handleRegister = () => {
    navigate('/register'); // Redirect to the Register page
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menue'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Programmes</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Feedback</Link></li>
        {/* Add Register Button */}
        <li>
          <button className="btn register-btn" onClick={handleRegister}>
            Register
          </button>
        </li>
      </ul>
      <img src={menue_icon} alt="Menu Icon" className="menue-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
