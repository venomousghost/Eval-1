import React from 'react';
import './Popup.css'; 

function Popup({ show, onClose, game }) {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
     
        <h2>{game.title}</h2>
        <img src={game.image} alt={game.title}  /><br></br>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
