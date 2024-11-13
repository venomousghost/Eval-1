import React, { useState, useEffect } from 'react';
import './Upcoming.css';

const Tournament = () => {
  const tournamentData = [
    {
      logo: '/Tournament/dota2-removebg-preview.png',
      game: 'WCG League - Dota 2 History',
      mode: 'Single Elimination',
      date: '4 Sep 2024',
      prize: '1,00,000 INR',
      teams: '116 of 256',
      image: '/Tournament/img3.jpg',
      id: 1, // Unique identifier for each tournament
    },
    {
      logo: '/Tournament/CSGO-Symbol-removebg-preview.png',
      game: 'eSport League - CS GO Division',
      mode: 'Single Elimination',
      date: '4 Sep 2024',
      prize: '1,00,000 INR',
      teams: '116 of 256',
      image: '/Tournament/img1.jpg',
      id: 2, // Unique identifier
    },
    {
      logo: '/Tournament/img22.jpg',
      game: 'Ultimate Gaming Championship',
      mode: 'Double Elimination',
      date: '20 Sep 2024',
      prize: '2,00,000 INR',
      teams: '128 of 256',
      image: '/Tournament/img22.jpg',
      id: 3, // Unique identifier
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registeredTournaments, setRegisteredTournaments] = useState([]); // Track registered tournaments
  const [activeTournamentId, setActiveTournamentId] = useState(null); // Track which tournament's form is active

  useEffect(() => {
    if (isModalVisible) {
      // Disable scrolling when modal is visible
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
    }

    // Cleanup on component unmount or modal visibility change
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalVisible]);

  const handleRegisterClick = (tournamentId) => {
    if (!registeredTournaments.includes(tournamentId)) { // Open form only if not already registered
      setActiveTournamentId(tournamentId); // Track the active tournament for which the form will be shown
      setIsModalVisible(true); // Show the registration form
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (e, tournamentId) => {
    e.preventDefault();
    setIsModalVisible(false); // Close the modal immediately after submission
    setIsSubmitted(true); // Show the success message

    // Register the tournament
    setRegisteredTournaments((prev) => [...prev, tournamentId]);

    // Hide the success message after 1 second
    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <div className="X-tournament">
      <div className="X-head">
        <h1>Upcoming Tournaments</h1>
      </div>
      <div className="X-caards">
        {tournamentData.map((tournament, index) => (
          <div className={`X-caard-wrap X-caard${index + 1}`} key={tournament.id}>
            <div className="X-caard" style={{ backgroundImage: `url(${tournament.image})` }}>
              <div className="X-immg">
                <div className="X-game-logo">
                  <img src={tournament.logo} alt={tournament.game} />
                </div>
                <div className="X-game-name">{tournament.game}</div>
                <div className="X-shadow"></div>
                <div className="X-details">
                  <div className="X-details-wrap">
                    <div className="X-basic-details">
                      <span>{tournament.mode}</span>
                      <span className="X-date">{tournament.date}</span>
                    </div>
                  </div>
                  <div className="X-icons">
                    <div className="X-price">
                      <div className="X-div1"></div>
                      <div className="X-div2">{tournament.prize}</div>
                    </div>
                    <div className="X-team">
                      <div className="X-div3"></div>
                      <div className="X-div4">{tournament.teams}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleRegisterClick(tournament.id)} 
              disabled={registeredTournaments.includes(tournament.id)} // Disable button if already registered for this tournament
            >
              {registeredTournaments.includes(tournament.id) ? "Registered" : "Register Now"}
            </button>
          </div>
        ))}
      </div>

      <div className={`X-overlay ${isModalVisible ? 'X-active' : ''}`} />

      {/* Show the modal only for the active tournament */}
      {activeTournamentId && (
        <div className={`X-container ${isModalVisible ? 'X-active' : ''}`}>
          <button className="X-close-btn" onClick={handleCloseModal}>❌</button>
          <h1 id="X-form-h11">Registration Form</h1>
          <form onSubmit={(e) => handleSubmit(e, activeTournamentId)} id="X-registration-form">
            <div className="X-form-group">
              <label htmlFor="X-team-leader">Leader Name</label>
              <input type="text" id="X-team-leader" name="X-team-leader" placeholder="Enter team leader name" required />
            </div>
            <div className="X-form-group">
              <label htmlFor="X-leader">Leader Email</label>
              <input type="email" id="X-leader" name="X-leader" placeholder="Enter team leader email" required />
            </div>
            <div className="X-form-group">
              <label htmlFor="X-Player1">Player 1 - ID</label>
              <input type="text" id="X-Player1" name="X-Player1" placeholder="Enter Player1 ID" required />
            </div>
            <div className="X-form-group">
              <label htmlFor="X-Player2">Player 2 - ID</label>
              <input type="text" id="X-Player2" name="X-Player2" placeholder="Enter Player2 ID" required />
            </div>
            <div className="X-form-group">
              <label htmlFor="X-Player3">Player 3 - ID</label>
              <input type="text" id="X-Player3" name="X-Player3" placeholder="Enter Player3 ID" required />
            </div>
            <div className="X-form-group">
              <label htmlFor="X-Player4">Player 4 - ID</label>
              <input type="text" id="X-Player4" name="X-Player4" placeholder="Enter Player4 ID" required />
            </div>
            <div className="X-form-group">
              <button type="submit" id="X-submit-btn">Register</button>
            </div>
          </form>
        </div>
      )}

      <div className={`X-submit-msg ${isSubmitted ? 'X-active' : ''}`}>
        <h1>You have successfully registered</h1>
      </div>
    </div>
  );
};

export default Tournament;
