import React, { useState } from 'react';
import './Collapse.css'; // Import the CSS file

const Collapse = () => {
  const [isHidden, setIsHidden] = useState(true); // State for toggle effect

  const toggleContent = () => {
    setIsHidden(!isHidden); // Toggle visibility of the hidden content
  };

  return (
    <div className="main-cover">
      <div className="cover">
        <div className="text">
          <div className="h1">
            Step Into the Arena of Champions.
          </div>
          <div className="p">
            Get ready to compete in the ultimate gaming showdown! Join top players from around the globe,
            prove your skills, and claim your victory.
          </div>

          <button 
            className={`button ${isHidden ? '' : 'btn-style'}`} 
            id="show-btn" 
            onClick={toggleContent}
          >
            Read More
          </button>

          {/* Hidden content that toggles visibility */}
          <div 
            id="hidden-content" 
            className={isHidden ? 'hidden-class-content' : ''}
          >
            This is where champions are made—are you ready to rise to the challenge?
          </div>
        </div>
      </div>

      <div className="image">
        <img 
          src="https://wallpapers.com/images/high/gaming-tournaments-1920-x-1080-wallpaper-rruvjrl0xdiqcr4l.webp" 
          alt="Gaming Studio" 
        />
      </div>
    </div>
  );
};

export default Collapse;
