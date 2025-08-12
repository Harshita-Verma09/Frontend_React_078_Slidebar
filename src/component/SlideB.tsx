import React from 'react';
import './SlideB.css';

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};


function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <ul>
        <li>Dashboard</li>
        <li>Profile</li>
        <li>Messages</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;
