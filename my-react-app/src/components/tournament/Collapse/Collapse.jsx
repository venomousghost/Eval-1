import React, { useState } from 'react';
import './Collapse.css'; // Import the CSS file

const Collapse = () => {
  const [isHidden, setIsHidden] = useState(true); // State for toggle effect

  const toggleContent = () => {
    setIsHidden(!isHidden); // Toggle visibility of the hidden content
  };

  return (
    <div className="X-main-cover">
      <div className="X-cover">
        <div className="X-text">
          <div className="X-h1">
            Step Into the Arena of Champions.
          </div>
          <div className="X-p">
            Get ready to compete in the ultimate gaming showdown! Join top players from around the globe,
            prove your skills, and claim your victory.
          </div>

          <button 
            className={`X-button ${isHidden ? '' : 'X-btn-style'}`} 
            id="X-show-btn" 
            onClick={toggleContent}
          >
            Read More
          </button>

          {/* Hidden content that toggles visibility */}
          <div 
            id="X-hidden-content" 
            className={isHidden ? 'X-hidden-class-content' : ''}
          >
            This is where champions are made—are you ready to rise to the challenge?
          </div>
        </div>
      </div>

      <div className="X-image">
        <img 
          src="https://wallpapers.com/images/high/gaming-tournaments-1920-x-1080-wallpaper-rruvjrl0xdiqcr4l.webp" 
          alt="Gaming Studio" 
        />
      </div>
    </div>
  );
};

export default Collapse;
