import React from "react";
import { Star, NoStar, HalfStar } from "./Icons/ReviewIcons";

const StarRating = ({ rating, maxStars = 5, className = "h-4 w-4" }) => {
  const renderStar = (position) => {
    const starNumber = Math.floor(rating);
    if (position <= starNumber) {
      return <Star className={`${className} text-yellow-400`} />;
    } else if (position === Math.ceil(rating) && !Number.isInteger(rating)) {
      return <HalfStar className={`${className} text-yellow-400`} />;
    }
    return <NoStar className={`${className} text-gray-300`} />;
  };

  return (
    <div className="flex items-center">
      {[...Array(maxStars)].map((_, index) => (
        <span key={index}>{renderStar(index + 1)}</span>
      ))}
    </div>
  );
};

export default StarRating;
