import React from "react";
import "./Track.css";

const Track = () => {
  return (
    <div className="track-outer">
      <img src="/Tournament/sher.png" alt="Sher Icon" className="sher" />
      <div className="track-upper">OUR TRACK RECORD</div>

      <div className="track-lower">
        {/* Games Card */}
        <div className="track-card">
          <div className="img">
            <img src="/Tournament/download.svg" alt="Games Icon" className="svg" />
          </div>
          <div className="text">
            <div className="text1">+ 12,000</div>
            <div className="text2">GAMES</div>
          </div>
        </div>

        {/* Players Card */}
        <div className="track-card">
          <div className="img">
            <img src="/Tournament/download1.svg" alt="Players Icon" />
          </div>
          <div className="text">
            <div className="text1">+ 611,776</div>
            <div className="text2">PLAYERS</div>
          </div>
        </div>

        {/* Teams Card */}
        <div className="track-card">
          <div className="img">
            <img src="/Tournament/download (2).svg" alt="Teams Icon" />
          </div>
          <div className="text">
            <div className="text1">+ 172,181</div>
            <div className="text2">TEAMS</div>
          </div>
        </div>

        {/* Champions Card */}
        <div className="track-card">
          <div className="img">
            <img src="/Tournament/download (3).svg" alt="Champions Icon" />
          </div>
          <div className="text">
            <div className="text1">+ 103</div>
            <div className="text2">CHAMPIONS</div>
          </div>
        </div>

        {/* Prizes Card */}
        <div className="track-card">
          <div className="img">
            <img src="/Tournament/download (4).svg" alt="Prizes Icon" />
          </div>
          <div className="text">
            <div className="text1">+ 10,000,000$</div>
            <div className="text2">WORTH OF PRIZES</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
