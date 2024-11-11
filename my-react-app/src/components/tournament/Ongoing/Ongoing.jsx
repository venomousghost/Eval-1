import React, { useState, useEffect } from "react";
import './Ongoing.css'; // Import the CSS file

const Ongoing = () => {
  // Date Logic
  useEffect(() => {
    const today = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = today.getFullYear();
    const month = monthNames[today.getMonth()];
    const day = today.getDate();

    const dateElements = document.querySelectorAll('.date');
    dateElements.forEach((ele) => {
      ele.innerHTML = `${day} ${month} ${year}`;
    });
  }, []); // Only runs once after the first render

  // Function to update scores
  function updateScore(setTeamOneScore, setTeamTwoScore, initialTeamOneScore, initialTeamTwoScore, interval) {
    let teamOneScore = initialTeamOneScore;
    let teamTwoScore = initialTeamTwoScore;

    const intervalID = setInterval(() => {
      const teamTurn = Math.floor(Math.random() * 2); // Random team turn
      const score = Math.floor(Math.random() * 3 + 1); // Random score (1 to 3)

      if (teamTurn === 0) {
        teamOneScore += score;
        setTeamOneScore(teamOneScore); // Update state for Team One
      } else {
        teamTwoScore += score;
        setTeamTwoScore(teamTwoScore); // Update state for Team Two
      }
    }, interval);

    return intervalID; // Return the interval ID for cleanup
  }

  // Card state management (useState for team scores)
  const [card1TeamOneScore, setCard1TeamOneScore] = useState(10);
  const [card1TeamTwoScore, setCard1TeamTwoScore] = useState(12);

  const [card2TeamOneScore, setCard2TeamOneScore] = useState(15);
  const [card2TeamTwoScore, setCard2TeamTwoScore] = useState(18);

  const [card3TeamOneScore, setCard3TeamOneScore] = useState(25);
  const [card3TeamTwoScore, setCard3TeamTwoScore] = useState(19);

  // Set intervals for score updates on each card
  useEffect(() => {
    // Set intervals to update scores for each card
    const interval1 = updateScore(setCard1TeamOneScore, setCard1TeamTwoScore, 10, 12, 5000);
    const interval2 = updateScore(setCard2TeamOneScore, setCard2TeamTwoScore, 15, 18, 4000);
    const interval3 = updateScore(setCard3TeamOneScore, setCard3TeamTwoScore, 25, 19, 4500);

    // Cleanup intervals when the component unmounts
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []); // Empty dependency array ensures this only runs once

  return (
    <div className="latest-matches">
      <div className="latest-top">
        <div className="latest-top-text">
          {/* <div className="div"><img src="Tournament/play-removebg-preview.png" alt="" width="20px" /></div> */}
          <div className="div">ONGOING TOURNAMENTS</div>
        </div>
      </div>

      {/* Match Cards */}
      {[...Array(3)].map((_, idx) => (
        <div key={idx}>
          <div className="latest-card">
            <div className="latest-card-inner">
              <div className="latest-card-img">
                <div className="img1">
                  <div className="img">
                    <img src="Tournament/team1-banner.png" alt="" />
                  </div>
                  <div className="text" id={`team${idx + 1}-name1`}>
                    TRIARCHY
                  </div>
                </div>
                <div className="img2">
                  <img src="Tournament/vs_dark.webp" alt="" height="75px" />
                </div>
                <div className="img1">
                  <div className="img">
                    <img src="Tournament/team1-banner.png" alt="" />
                  </div>
                  <div className="text" id={`team${idx + 1}-name2`}>
                    TRIARCHY
                  </div>
                </div>
              </div>
              <div className="latest-text">
                <div className="latest-text-inner">
                  <div className="text-btn">
                    <div className="text-btn1">all matches</div>
                    <div className="text-btn2">upcoming matches</div>
                  </div>
                  <div className="text">LEGENDARY BATTLES</div>
                  <div className="date">4th sep 2024</div>
                </div>
                <div className="watch">
                  <div className="score">
                    {/* Display the scores dynamically */}
                    <span>{card1TeamOneScore}</span>:<span>{card1TeamTwoScore}</span>
                  </div>
                  <div className="text">watch stream</div>
                  <div className="stream">
                    <div className="div"><img src="Tournament/twitch-white-icon.webp" alt="" width="30px" /></div>
                    <div className="div"><img src="Tournament/youtube-app-white-icon.webp" alt="" width="34px" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="linee"></div>
        </div>
      ))}
    </div>
  );
};

export default Ongoing;
