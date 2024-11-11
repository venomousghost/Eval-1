import React from 'react';
import './Organise.css';

const Organise = () => {

  return (
    <div>
      

      <div className="main">
        <div className="main-wrap">
          <div className="main-text">
            <div className="h1">Organize and manage Esports tournaments</div>
            <div className="p">
              We connect brands with competitive, young, and influential players through world-class online esports experiences.
            </div>
            <div className="trusted">
              <div className="trust">Trusted by</div>
              <div className="trust-img">
                <img 
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/dbbfb2158886895.639d0d45b183b.png" 
                  alt="" 
                  width="50px"
                />
              </div>
              <div className="btn">
                <button>Explore more</button>
              </div>
            </div>
          </div>
          <div className="main-form">
            <div className="form-container">
              <form action="#" method="post">
                <h2>Speak to our Sales Team</h2>

                <label htmlFor="fullName">Your Full Name:</label>
                <input type="text" id="fullName" name="fullName" required />

                <label htmlFor="jobTitle">Your Job Title:</label>
                <input type="text" id="jobTitle" name="jobTitle" required />

                <label htmlFor="companyName">Company Name:</label>
                <input type="text" id="companyName" name="companyName" required />

                <label htmlFor="email">Your Email (must be your company email address):</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  pattern=".+@yourcompany\.com" 
                  required 
                />

                <label htmlFor="contactNumber">Your Contact Number:</label>
                <input type="tel" id="contactNumber" name="contactNumber" required />

                <label htmlFor="mes">Add message</label>
                <input type="text" id="mes" name="mes" required />

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="form">
        <div className="h1">Relax and let us manage it</div>
        <div className="h3">See how We helps brands</div>
      </div>

      <div className="main1">
        <div className="main-wrap1">
          <div className="card card1">
            <div className="card-text">
              <div className="h11">END TO END GAMING & ESPORTS SOLUTIONS</div>
              <div className="h33">
                We offer bespoke, consolidated, gaming and esports strategies and services, leveraging our industrial expertise to help you win with your consumers.
              </div>
            </div>
          </div>
          <div className="card card3">
            <div className="card-text">
              <div className="h11">LIVE STREAMING AND PRODUCTION</div>
              <div className="h33">
                Live streaming, studio production and event broadcasting are now the most essential services for any gaming collaboration to incentivize exposure and engagement. We have an expert team providing production services across the MENA region.
              </div>
            </div>
          </div>
          <div className="card card4">
            <div className="card-text">
              <div className="h11">INFLUENCER AND PARTNERSHIP MARKETING</div>
              <div className="h33">
                We offer you the best exposure in the niche audience through our comprehensive network of influencers implementing the best strategy and management. We hand-pick the best match for your brand to deliver better ROI.
              </div>
            </div>
          </div>
          <div className="card card5">
            <div className="card-text">
              <div className="h11">ESPORTS TEAM MANAGEMENT</div>
              <div className="h33">
                We can help your brand launch its own esports team in the region while providing the team with world-class consultants, training and networking opportunities with regional esports pros.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organise;