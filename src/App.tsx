import React, { useState } from 'react';
import Sidebar from './component/SlideB';
import './App.css';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰ Open Sidebar
      </button>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="content">
        <h1>Hello, Explorer 👋</h1>
        <p>Explore your profile, check your messages, and manage your activity—all in one place.</p>
      </div> 
    </div>
  );
};

export default App;
