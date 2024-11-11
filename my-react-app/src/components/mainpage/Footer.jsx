import React from 'react';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-body">
          <div className="box">
            <div className="logo footer-logo">
              <img src="https://www.pngall.com/wp-content/uploads/5/Game-Controller-PNG-Clipart.png" width="50px" alt="Game Controller Logo" />
              <div>
  <h1 style={{ fontSize: '24px' }}>Gaming UI</h1>
</div>

            </div>
          </div>
          <ul>
            <h3>Short Links</h3>
            <li><a href="#">Arcade</a></li>
            <li><a href="#">War Zone</a></li>
            <li><a href="#">Fifa Game</a></li>
            <li><a href="#">Pes 2020</a></li>
            <li><a href="#">Xbox Game</a></li>
          </ul>
          <ul>
            <h3>Action Games</h3>
            <li><a href="#">Anpar</a></li>
            <li><a href="#">BattleField</a></li>
            <li><a href="#">The Ghost</a></li>
            <li><a href="#">Fortnite</a></li>
            <li><a href="#">Cold War</a></li>
          </ul>
          <ul>
            <h3>Get In Touch</h3>
            <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i> Linkedin</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>Copyright &copy; All Right Reserved | Designed <span>By Team UI</span> 2024</p>
      </div>
    </>
  );
}

export default Footer;
