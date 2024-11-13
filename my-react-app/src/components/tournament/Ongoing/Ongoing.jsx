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

    const dateElements = document.querySelectorAll('.X-date');
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
    const interval1 = updateScore(setCard1TeamOneScore, setCard1TeamTwoScore, 10, 12, 5000);
    const interval2 = updateScore(setCard2TeamOneScore, setCard2TeamTwoScore, 15, 18, 4000);
    const interval3 = updateScore(setCard3TeamOneScore, setCard3TeamTwoScore, 25, 19, 4500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="X-latest-matches">
      <div className="X-latest-top">
        <div className="X-latest-top-text">
          <div className="X-div">ONGOING TOURNAMENTS</div>
        </div>
      </div>

      {[...Array(3)].map((_, idx) => (
        <div key={idx}>
          <div className="X-latest-card">
            <div className="X-latest-card-inner">
              <div className="X-latest-card-img">
                <div className="X-img1">
                  <div className="X-img">
                    <img src="Tournament/team1-banner.png" alt="" />
                  </div>
                  <div className="X-text" id={`X-team${idx + 1}-name1`}>
                    TRIARCHY
                  </div>
                </div>
                <div className="X-img2">
                  <img src="Tournament/vs_dark.webp" alt="" height="75px" />
                </div>
                <div className="X-img1">
                  <div className="X-img">
                    <img src="Tournament/team1-banner.png" alt="" />
                  </div>
                  <div className="X-text" id={`X-team${idx + 1}-name2`}>
                    TRIARCHY
                  </div>
                </div>
              </div>
              <div className="X-latest-text">
                <div className="X-latest-text-inner">
                  <div className="X-text-btn">
                    <div className="X-text-btn1">all matches</div>
                    <div className="X-text-btn2">upcoming matches</div>
                  </div>
                  <div className="X-text">LEGENDARY BATTLES</div>
                  <div className="X-date">4th sep 2024</div>
                </div>
                <div className="X-watch">
                  <div className="X-score">
                    <span>{card1TeamOneScore}</span>:<span>{card1TeamTwoScore}</span>
                  </div>
                  <div className="X-text">watch stream</div>
                  <div className="X-stream">
                    <div className="X-div"><img src="Tournament/twitch-white-icon.webp" alt="" width="30px" /></div>
                    <div className="X-div"><img src="Tournament/youtube-app-white-icon.webp" alt="" width="34px" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="X-linee"></div>
        </div>
      ))}
    </div>
  );
};

export default Ongoing;
