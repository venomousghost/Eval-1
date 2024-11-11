import React from 'react';

function NewsSection() {
  return (
    <section className="section news" aria-label="our latest news">
      <div className="container">
        <p className="section-subtitle">What's On Our Mind</p>
        <h2 className="h2 section-title">
          News And <span className="span">Headlines</span>
        </h2>
        <p className="section-text">
          Our success in creating business solutions is due in large part to our talented and highly committed team.
        </p>
        <ul className="news-list">
          <li>
            <div className="news-card">
              <figure className="card-banner img-holder">
                <img src="./images/news-1.jpg" alt="Innovative Business All Over The World" className="img-cover" />
              </figure>
              <div className="card-content">
                <a href="#" className="card-tag">Business</a>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <i className="fa fa-calendar"></i>
                    <time className="card-meta-text">Jan 01 2022</time>
                  </li>
                  <li className="card-meta-item">
                    <i className="fa fa-user"></i>
                    <p className="card-meta-text">Elliot Alderson</p>
                  </li>
                </ul>
                <h3 className="h3">
                  <a href="#" className="card-title">Innovative Business All Over The World.</a>
                </h3>
                <p className="card-text">
                  Financial experts support or help you to find out which way you can raise your funds more...
                </p>
                <a href="#" className="link has-before">Read More</a>
              </div>
            </div>
          </li>

          <li>
            <div className="news-card">
              <figure className="card-banner img-holder" style={{ '--width': 600, '--height': 400 }}>
                <img src="./images/news-2.jpg" width="600" height="400" loading="lazy"
                  alt="How To Start Initiating An Startup In Few Days." className="img-cover"/>
              </figure>

              <div className="card-content">
                <a href="#" className="card-tag">Startup</a>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <i className="fa fa-calendar"></i>
                    <time className="card-meta-text" dateTime="2022-01-01">Jan 01 2022</time>
                  </li>
                  <li className="card-meta-item">
                    <i className="fa fa-user"></i>
                    <p className="card-meta-text">Elliot Alderson</p>
                  </li>
                </ul>
                <h3 className="h3">
                  <a href="#" className="card-title">How To Start Initiating A Startup In Few Days.</a>
                </h3>
                <p className="card-text">
                  Financial experts support or help you to find out which way you can raise your funds more...
                </p>
                <a href="#" className="link has-before">Read More</a>
              </div>
            </div>
          </li>

          <li>
            <div className="news-card">
              <figure className="card-banner img-holder" style={{ '--width': 600, '--height': 400 }}>
                <img src="./images/news-3.jpg" width="600" height="400" loading="lazy"
                  alt="Financial Experts Support Help You To Find Out." className="img-cover"/>
              </figure>

              <div className="card-content">
                <a href="#" className="card-tag">Finance</a>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <i className="fa fa-calendar"></i>
                    <time className="card-meta-text" dateTime="2022-01-01">Jan 01 2022</time>
                  </li>
                  <li className="card-meta-item">
                    <i className="fa fa-user"></i>
                    <p className="card-meta-text">Elliot Alderson</p>
                  </li>
                </ul>
                <h3 className="h3">
                  <a href="#" className="card-title">Financial Experts Support Help You To Find Out.</a>
                </h3>
                <p className="card-text">
                  Financial experts support or help you to find out which way you can raise your funds more...
                </p>
                <a href="#" className="link has-before">Read More</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NewsSection;
