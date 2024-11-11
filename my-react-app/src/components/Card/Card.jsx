import React from 'react';
import './Card.css';

function Card({ game }) {
  return (
    
    <div className="card" data-favorite={game.favorite}>
        
      <img src={game.image} alt={game.title} />
      <div className="text">
        <li>{game.title}</li>
        <select id ="dropdown1">
          <option value="1"></option>
          <option value="1">Go to store page</option>
          <option value="2">Add to favourites</option>
          <option value="3">Add to collection</option>
        </select>
      </div>
      
    </div>
    
    
  );
}

export default Card;
