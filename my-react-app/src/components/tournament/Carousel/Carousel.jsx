import React, { useState} from 'react';
import './carousel.css';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            image: '/Tournament/bg1.jpg',
            title: 'Join the Battle!',
            text: `Compete in our latest gaming tournament, where top players clash for glory and epic rewards. 
            Whether you're a seasoned pro or a rising star, this is your chance to showcase your skills on the grand stage. 
            Register now, form your squad, and get ready for intense action. Victory awaits!`,
        },
        {
            image: '/Tournament/bg3.jpg',
            title: 'Level Up Your Game!',
            text: `Enter our upcoming tournament and face off against the best in the gaming community. 
            With high stakes, thrilling matches, and amazing prizes, this is the ultimate test of your gaming prowess. 
            Don’t miss your chance to dominate the leaderboard—sign up now!`,
        },
        {
            image: '/Tournament/bg2.jpeg',
            title: 'Rise to the Challenge!',
            text: `The arena is set, and the competition is fierce. Are you ready to prove you're the best? 
            Join our tournament, where every match brings you closer to glory and exclusive rewards. 
            Gather your team, strategize, and prepare for battle. Victory is within reach!`,
        },
    ];

    const handleSlide = (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);

        const nextIndex = direction === 'next'
            ? (currentIndex + 1) % slides.length
            : (currentIndex - 1 + slides.length) % slides.length;

        setTimeout(() => {
            setCurrentIndex(nextIndex);
            setIsAnimating(false);
        }, 500); // Timing same as CSS transition duration
    };

    return (
        <div className="carousel">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="carousel-inner"
                    style={{
                        display: index === currentIndex ? 'block' : 'none'
                    }}
                >
                    <div className="carousel-content">
                        <img src={slide.image} alt={slide.title} />
                        <div className="carousel-text">
                            <h1>{slide.title}</h1>
                            <p>{slide.text}</p>
                            <button className="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="arrows">
                <button id="prev" onClick={() => handleSlide('prev')}>&lt;</button>
                <button id="next" onClick={() => handleSlide('next')}>&gt;</button>
            </div>
        </div>
    );
}







export default Carousel;


