import React from "react";
import "./Review.css";

// Data for reviews
const reviewsData = [
  {
    icon: "/Tournament/twiter-removebg-preview.png",
    image: "/Tournament/image.webp",
  },
  {
    icon: "/Tournament/twiter-removebg-preview.png",
    image: "/Tournament/image.webp",
  },
  {
    icon: "/Tournament/twiter-removebg-preview.png",
    image: "/Tournament/image.webp",
  },
  {
    icon: "/Tournament/twiter-removebg-preview.png",
    image: "/Tournament/image.webp",
  },
  {
    icon: "/Tournament/twiter-removebg-preview.png",
    image: "/Tournament/image.webp",
  },
  {
    icon: "/Tournament/twiter-removebg-preview.png",
    image: "/Tournament/image.webp",
  },
];

// Review Card Component
const ReviewCard = ({ icon, image }) => (
  <div className="X-review-card1">
    <div className="X-icon">
      <img src={icon} alt="Twitter Icon" />
    </div>
    <div className="X-img">
      <img src={image} alt="Player Review" />
    </div>
  </div>
);

const Review = () => {
  return (
    <div className="X-reviews">
      <div className="X-h1">HAPPY PLAYERS</div>
      <div className="X-slidee">
        <div className="X-review-card">
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} icon={review.icon} image={review.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
