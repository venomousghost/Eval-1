import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (formData.fullname && formData.email && formData.message) {

      setTimeout(() => {
        setResponseMessage('Your message has been successfully sent. Thank you!');
        setErrorMessage('');
        
        setFormData({ fullname: '', email: '', message: '' });
      }, 1000);
    } else {

      setErrorMessage('Please fill out all fields.');
      setResponseMessage('');
    }
  };

  return (
    <>

      <section className='contactx'>
       <nav>
        <a href="#" class="logo">
            <box-icon name='game' type='solid' color='#00FFFF' ></box-icon>Gaming<span>UI</span>
        </a>
        <div class="menuToggle" onclick="toggleMenu()">
        </div>
        <ul class="navigation">
            <li><a href="/Home" onclick="toggleMenu()">Home</a></li>
            <li><a href="/Cart" onclick="toggleMenu()">Cart</a></li>
            <li><a href="/Profile" onclick="toggleMenu()">Profile</a></li>
            <li><a href="/Login" onclick="toggleMenu()">Sign up/sign in</a></li>
            <li class="dropdown">
                <a href="#more" onclick="toggleMenu()">More</a>
                <ul class="dropdown-menu">
                    <li><a href="/Organise" onclick="toggleMenu()">Organise</a></li>
                    <li><a href="/Contact" onclick="toggleMenu()">Contact us</a></li>
                     <li><a href="/Library" onclick="toggleMenu()">Library</a></li>
                     <li><a href="/Tournament" onclick="toggleMenu()">Tournament</a></li>
                </ul>
            </li>

        </ul>
    </nav>

        <div className="containerx">
          <div className="imgboxx">
            <img src="images/contact/contactimg.jpg" alt="Contact" />
          </div>
          <div className="contentx">
            <div className="headingx">
              <h1>Contact Us</h1>
            </div>
            <div className="formx">
              <div className="textx">
                <form id="form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    id="fullname"
                    
                    placeholder="Full name"
                    className='blue'
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    className='blue'
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="message"
                    className='blue'
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit" id="btn">Contact Us</button>
                  
              {responseMessage && (
              
              <div id='responemessage' style={{ color: 'green', marginTop: '10px' }}>
                <p>{responseMessage}</p>
              </div>
            )}
            {errorMessage && (
              <div id='errormessage' style={{ color: 'red', marginTop: '10px' }}>
                <p>{errorMessage}</p>
              </div>
            )}
                </form>
              </div>

              

              <div className="text2x">
                <h3>Contact</h3>
                <p >Gamingsphere@gmail.com</p>
                <h3 >Based in</h3>
                <p >Rajpura,<br />Punjab, India</p>
                <div className="iconsx">
                  <div className='hi'>
                  <FontAwesomeIcon icon={faFacebook} size='2xl' />
                  </div>
                  <div className='hi'>
                  <FontAwesomeIcon icon={faInstagram} size='2xl' />
                  </div>
                  <div className='hi'>
                  <FontAwesomeIcon icon={faTwitter} size='2xl' />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <footer>
        <div className="footer-body">
          <div className="box">
            <div className="logo footer-logo">
              <img src="https://www.pngall.com/wp-content/uploads/5/Game-Controller-PNG-Clipart.png" width="50px"/>
              <h2>Gaming sphere</h2>
            </div>
            <div className="about">
              <p>Gaming sphere is a digital distribution platform that puts gamers first and respects their need to own games.</p>
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
            <li><a href="#"><FontAwesomeIcon icon={faFacebook} />Facebook</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInstagram} />Instagram</a></li>
            <li><a href="#"> <FontAwesomeIcon icon={faTwitter}/>Twitter</a></li>
            <li><a href="#"> <FontAwesomeIcon icon={faLinkedin}/>Linkedin</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy; All Right Reserved | Designed <span>By Team sphere</span> 2024</p>
        </div>
      </footer> 
    </>
  );
};

export default ContactUs;
