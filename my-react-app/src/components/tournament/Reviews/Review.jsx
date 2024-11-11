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
  <div className="review-card1">
    <div className="icon">
      <img src={icon} alt="Twitter Icon" />
    </div>
    <div className="img">
      <img src={image} alt="Player Review" />
    </div>
  </div>
);

const Review = () => {
  return (
    <div className="reviews">
      <div className="h1">HAPPY PLAYERS</div>
      <div className="slidee">
        <div className="review-card">
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} icon={review.icon} image={review.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
