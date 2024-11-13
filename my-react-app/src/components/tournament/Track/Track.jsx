import React from "react";
import "./Track.css";

const Track = () => {
  return (
    <div className="X-track-outer">
      <img src="/Tournament/sher.png" alt="Sher Icon" className="X-sher" />
      <div className="X-track-upper">OUR TRACK RECORD</div>

      <div className="X-track-lower">
        {/* Games Card */}
        <div className="X-track-card">
          <div className="X-img">
            <img src="/Tournament/download.svg" alt="Games Icon" className="X-svg" />
          </div>
          <div className="X-text">
            <div className="X-text1">+ 12,000</div>
            <div className="X-text2">GAMES</div>
          </div>
        </div>

        {/* Players Card */}
        <div className="X-track-card">
          <div className="X-img">
            <img src="/Tournament/download1.svg" alt="Players Icon" />
          </div>
          <div className="X-text">
            <div className="X-text1">+ 611,776</div>
            <div className="X-text2">PLAYERS</div>
          </div>
        </div>

        {/* Teams Card */}
        <div className="X-track-card">
          <div className="X-img">
            <img src="/Tournament/download (2).svg" alt="Teams Icon" />
          </div>
          <div className="X-text">
            <div className="X-text1">+ 172,181</div>
            <div className="X-text2">TEAMS</div>
          </div>
        </div>

        {/* Champions Card */}
        <div className="X-track-card">
          <div className="X-img">
            <img src="/Tournament/download (3).svg" alt="Champions Icon" />
          </div>
          <div className="X-text">
            <div className="X-text1">+ 103</div>
            <div className="X-text2">CHAMPIONS</div>
          </div>
        </div>

        {/* Prizes Card */}
        <div className="X-track-card">
          <div className="X-img">
            <img src="/Tournament/download (4).svg" alt="Prizes Icon" />
          </div>
          <div className="X-text">
            <div className="X-text1">+ 10,000,000$</div>
            <div className="X-text2">WORTH OF PRIZES</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
