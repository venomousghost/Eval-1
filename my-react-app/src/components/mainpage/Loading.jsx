
import React from 'react';

function Loading() {
  return (
    <div className="loading">
      <div className="loading-text">
        {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, index) => (
          <span key={index} className="loading-text-words">{letter}</span>
        ))}
      </div>
    </div>
  );
}

export default Loading;
