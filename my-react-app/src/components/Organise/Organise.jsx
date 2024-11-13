import React from 'react';
import './Organise.css';

const Organise = () => {
  return (
    <div>
      <div className="X-main">
        <div className="X-main-wrap">
          <div className="X-main-text">
            <div className="X-h1">Organize and manage Esports tournaments</div>
            <div className="X-p">
              We connect brands with competitive, young, and influential players through world-class online esports experiences.
            </div>
            <div className="X-trusted">
              <div className="X-trust">Trusted by</div>
              <div className="X-trust-img">
                <img 
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/dbbfb2158886895.639d0d45b183b.png" 
                  alt="" 
                  width="50px"
                />
              </div>
              <div className="X-btn">
                <button>Explore more</button>
              </div>
            </div>
          </div>
          <div className="X-main-form">
            <div className="X-form-container">
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

      <div className="X-form">
        <div className="X-h1">Relax and let us manage it</div>
        <div className="X-h3">See how We helps brands</div>
      </div>

      <div className="X-main1">
        <div className="X-main-wrap1">
          <div className="X-card X-card1">
            <div className="X-card-text">
              <div className="X-h11">END TO END GAMING & ESPORTS SOLUTIONS</div>
              <div className="X-h33">
                We offer bespoke, consolidated, gaming and esports strategies and services, leveraging our industrial expertise to help you win with your consumers.
              </div>
            </div>
          </div>
          <div className="X-card X-card3">
            <div className="X-card-text">
              <div className="X-h11">LIVE STREAMING AND PRODUCTION</div>
              <div className="X-h33">
                Live streaming, studio production and event broadcasting are now the most essential services for any gaming collaboration to incentivize exposure and engagement. We have an expert team providing production services across the MENA region.
              </div>
            </div>
          </div>
          <div className="X-card X-card4">
            <div className="X-card-text">
              <div className="X-h11">INFLUENCER AND PARTNERSHIP MARKETING</div>
              <div className="X-h33">
                We offer you the best exposure in the niche audience through our comprehensive network of influencers implementing the best strategy and management. We hand-pick the best match for your brand to deliver better ROI.
              </div>
            </div>
          </div>
          <div className="X-card X-card5">
            <div className="X-card-text">
              <div className="X-h11">ESPORTS TEAM MANAGEMENT</div>
              <div className="X-h33">
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
