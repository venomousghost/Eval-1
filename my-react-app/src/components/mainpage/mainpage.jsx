import React, { useState, useEffect } from 'react';
import Loading from './/Loading';
import Navbar from './Navbar';
import Slider from './Slider';
import BrandSection from './BrandSection';
import ProductSection from './ProductSection';
import NewsSection from './NewsSection';
import Footer from './Footer';
import './home.css';

function Mainpage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navbar />
      <Slider />
      <BrandSection />
      <ProductSection />
      <NewsSection />
      <Footer />
    </div>
  );
}

export default Mainpage;
