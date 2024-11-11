import React from 'react';

function BrandSection() {
  return (
    <section className="section brand" aria-label="brand">
      <div className="container">
        <ul className="has-scrollbar">
          <li className="brand-item">
            <img src="./images/brand-1.png" width="90" height="90" loading="lazy" alt="brand logo 1" />
          </li>
          <li className="brand-item">
            <img src="./images/brand-2.png" width="90" height="90" loading="lazy" alt="brand logo 2" />
          </li>
          <li className="brand-item">
            <img src="./images/brand-3.png" width="90" height="90" loading="lazy" alt="brand logo 3" />
          </li>
          <li className="brand-item">
            <img src="./images/brand-4.png" width="90" height="90" loading="lazy" alt="brand logo 4" />
          </li>
          <li className="brand-item">
            <img src="./images/brand-5.png" width="90" height="90" loading="lazy" alt="brand logo 5" />
          </li>
          <li className="brand-item">
            <img src="./images/brand-6.png" width="90" height="90" loading="lazy" alt="brand logo 6" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BrandSection;
