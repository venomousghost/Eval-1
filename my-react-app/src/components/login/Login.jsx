import styles from './Login.module.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  return (
    <div className={`${styles.container} ${isSignUpMode ? styles['sign-up-mode'] : ''}`}>
      <div className={styles['forms-container']}>
        <div className={styles['signin-signup']}>
          <form className={styles['sign-in-form']}>
            <h2 className={styles.title}>Sign in</h2>
            <div className={styles['input-field']}>
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className={styles['input-field']}>
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className={`${styles.btn} ${styles.solid}`} />
            <p className={styles['social-text']}>Or Sign in with social platforms</p>
            <div className={styles['social-media']}>
              <a href="#" className={styles['social-icon']}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className={styles['social-icon']}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className={styles['social-icon']}>
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className={styles['social-icon']}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>

          <form className={styles['sign-up-form']}>
            <h2 className={styles.title}>Sign up</h2>
            <div className={styles['input-field']}>
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className={styles['input-field']}>
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles['input-field']}>
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className={styles.btn} value="Sign up" />
            <p className={styles['social-text']}>Or Sign up with social platforms</p>
            <div className={styles['social-media']}>
              <a href="#" className={styles['social-icon']}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className={styles['social-icon']}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className={styles['social-icon']}>
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className={styles['social-icon']}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className={styles['panels-container']}>
        <div className={`${styles.panel} ${styles['left-panel']}`}>
          <div className={styles.content}>
            <h3>New here ?</h3>
            <p>Join now to unlock the full experience! Sign up today.</p>
            <button className={`${styles.btn} ${styles.transparent}`} onClick={handleSignUpClick}>Sign up</button>
          </div>
          <img
            src="https://www.pngarts.com/files/11/GTA-Characters-PNG-Photo.png"
            className={styles.image}
            alt="Sign up"
          />
        </div>
        <div className={`${styles.panel} ${styles['right-panel']}`}>
          <div className={styles.content}>
            <h3>One of us ?</h3>
            <p>Welcome back! Sign in now for more magic!</p>
            <button className={`${styles.btn} ${styles.transparent}`} onClick={handleSignInClick}>Sign in</button>
          </div>
          <img
            src="https://purepng.com/public/uploads/large/assassins-creed-game-mnd.png"
            className={styles.image}
            alt="Sign in"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
