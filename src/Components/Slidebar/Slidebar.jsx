import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import '../Slidebar/Slidebar.css'; // Sidebar CSS file for styling

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Function to toggle sidebar open/close
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Close sidebar if click is outside of the sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('.hamburger')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleSidebar}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>

            {/* Sidebar itself */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
                <ul>
                    <li><Link to="/donation">Donation</Link></li>
                    <li><Link to="/update">Update Profile</Link></li>
                    <li><Link to="/serach">Alumini Directory</Link></li>
                    <li><Link to="/job-portal">Job Portal</Link></li>
                    <li><Link to="/add-story">Add story</Link></li>
                    <li><Link to="/success-story">Success Story</Link></li>
                    <li><Link to="/create-events">Events and Reunions</Link></li>
                    <li><Link to="/Event-List">Events List</Link></li>
                    <li><Link to="/event-registration">Register for an event</Link></li>
                    <li><Link to="/register-user-list">Register user List</Link></li>
                    <li><Link to="/search">Search job</Link></li>
                    <li><Link to="/donors">Doners List</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
