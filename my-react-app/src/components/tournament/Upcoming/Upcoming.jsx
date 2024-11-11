import React, { useState } from 'react';
import './Upcoming.css'; // Make sure this CSS is linked correctly

const Tournament = () => {
  const tournamentData = [
    {
      logo: '/Tournament/dota2-removebg-preview.png',
      game: 'WCG League - Dota 2 History',
      mode: 'Single Elimination',
      date: '4 Sep 2024',
      prize: '1,00,000 INR',
      teams: '116 of 256',
      image: '/Tournament/img3.jpg', // Added unique image path
    },
    {
      logo: '/Tournament/CSGO-Symbol-removebg-preview.png',
      game: 'eSport League - CS GO Division',
      mode: 'Single Elimination',
      date: '4 Sep 2024',
      prize: '1,00,000 INR',
      teams: '116 of 256',
      image: '/Tournament/img1.jpg', // Added unique image path
    },
    {
      logo: '/Tournament/img22.jpg',
      game: 'Ultimate Gaming Championship',
      mode: 'Double Elimination',
      date: '20 Sep 2024',
      prize: '2,00,000 INR',
      teams: '128 of 256',
      image: '/Tournament/img22.jpg', // Added unique image path
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRegisterClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setIsSubmitted(false); // Reset after a brief delay
    }, 3000); // Hide modal and reset the state after 3 seconds
  };

  return (
    <div className="tournament">
      <div className="head">
        <h1>Upcoming Tournaments</h1>
      </div>
      <div className="caards">
        {tournamentData.map((tournament, index) => (
          <div className={`caard-wrap caard${index + 1}`} key={index}>
            <div className="caard" style={{ backgroundImage: `url(${tournament.image})` }}>
              <div className="immg">
                <div className="game-logo">
                  <img src={tournament.logo} alt={tournament.game} />
                </div>
                <div className="game-name">{tournament.game}</div>
                <div className="shadow"></div>
                <div className="details">
                  <div className="details-wrap">
                    <div className="basic-details">
                      <span>{tournament.mode}</span>
                      <span className="date">{tournament.date}</span>
                    </div>
                  </div>
                  <div className="icons">
                    <div className="price">
                      <div className="div1"></div>
                      <div className="div2">{tournament.prize}</div>
                    </div>
                    <div className="team">
                      <div className="div3"></div>
                      <div className="div4">{tournament.teams}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleRegisterClick}>Register Now</button>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      <div className={`overlay ${isModalVisible ? 'active' : ''}`} />

      {/* Registration Modal */}
      <div className={`container ${isModalVisible ? 'active' : ''}`}>
        <button className="close-btn" onClick={handleCloseModal}>❌</button>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit} id="registration-form">
          <div className="form-group">
            <label htmlFor="team-leader">Leader Name</label>
            <input type="text" id="team-leader" name="team-leader" placeholder="Enter team leader name" required />
          </div>
          <div className="form-group">
            <label htmlFor="leader">Leader Email</label>
            <input type="email" id="leader" name="leader" placeholder="Enter team leader email" required />
          </div>
          <div className="form-group">
            <label htmlFor="Player1">Player 1 - ID</label>
            <input type="text" id="Player1" name="Player1" placeholder="Enter Player1 ID" required />
          </div>
          <div className="form-group">
            <label htmlFor="Player2">Player 2 - ID</label>
            <input type="text" id="Player2" name="Player2" placeholder="Enter Player2 ID" required />
          </div>
          <div className="form-group">
            <label htmlFor="Player3">Player 3 - ID</label>
            <input type="text" id="Player3" name="Player3" placeholder="Enter Player3 ID" required />
          </div>
          <div className="form-group">
            <label htmlFor="Player4">Player 4 - ID</label>
            <input type="text" id="Player4" name="Player4" placeholder="Enter Player4 ID" required />
          </div>
          <div className="form-group">
            <button type="submit" id="submit-btn">Register</button>
          </div>
        </form>
      </div>

      {/* Success Message */}
      <div className={`submit-msg ${isSubmitted ? 'active' : ''}`}>
        <h1>You have successfully registered</h1>
      </div>
    </div>
  );
};

export default Tournament;
