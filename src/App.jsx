import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Two from './Components/Two/Two';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Three from './Components/Three/Three';
import Testimonials from './Components/Testimonials/Testimonials';
import Four from './Components/Four/Four';
import Footer from './Components/Footer/Footer';
import Videoplayer from './Components/Videoplayer/Videoplayer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import { useAuth } from './contexts/AuthContext';
import ProfileForm from './Components/ProfileForm/ProfileForm';
import DonationForm from './Components/Donation/Donation';
import JobPortal from './Components/JobPortal/JobPortal';
import AddStory from './Components/Story/Addstory';
import StoryList from './Components/Story/StoryList';
import SearchProfiles from './Components/Search/SearchProfiles';
import UpdateProfileByName from './Components/Search/UpdateProfileByName';
import CreateEvent from './Components/Events/CreateEvent';
import EventList from './Components/Events/EventList';
import RegisterEvent from './Components/RegisterEvent/RegisterEvent';
import RegisteredUsers from './Components/RegisterEvent/RegisteredUsers';
import JobSearch from './Components/JobPortal/JobSearch';
import DonorList from './Components/Donation/DonorList';



const App = () => {
  const [playState, setPlayState] = useState(false);
  const location = useLocation(); // Access current path

  // Pages where the Navbar should not be displayed
  const noNavbarPaths = ['/register', '/login', '/dashboard','/donation',"/job-portal","/add-story","/success-story","/events-reunions","/feedback","/update","/serach","/create-events","/Event-List","/event-registration","/register-user-list","/search","/donors"];
const {isAuthenticated}=useAuth()
  return (
    <div>
      {/* Render Navbar on all pages except specified paths */}
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<div>
          <Hero />
          <div className="container">
            <Title subTitle="OUR PROGRAMMES" title="What we offer" />
            <Two />
            <About setPlayState={setPlayState} />
            <Title subTitle="GALLERY" title="Photos" />
            <Three />
            <Title subTitle="TESTIMONIALS" title="What Alumni Says" />
            <Testimonials />
            <Title subTitle="CONTACT US" title="Get in Touch" />
            <Four />
            {/* <Footer /> */}
          </div>
          <Videoplayer playState={playState} setPlayState={setPlayState} />
        </div>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<ProfileForm />} />
        <Route path='/donation' element={<DonationForm/>}/>
        <Route path='/job-portal' element={<JobPortal/>} />
        <Route path='/add-story' element={<AddStory/>} />
        <Route path='/success-story' element={<StoryList/>} />
        <Route path='/serach' element={<SearchProfiles/>} />
        <Route path='/update' element={<UpdateProfileByName/>} />
        <Route path='/create-events' element={<CreateEvent/>} />
        <Route path='/Event-List' element={<EventList/>} />
        <Route path='/event-registration' element={<RegisterEvent/>} />
        <Route path='/register-user-list' element={<RegisteredUsers/>} />
        <Route path='/search' element={<JobSearch/>} />
        <Route path='/donors' element={<DonorList/>} />

      </Routes>
    </div>
  );
};

// Wrap the App component with Router
const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
