import React, { useState } from "react";
import "./StarRating.css";

const StarRating = ({ starCount = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating-container">
      {new Array(starCount).fill(0).map((_, index) => {
        return (
          <span
            key={index}
            onClick={() => setRating(index + 1)}
            className={
              (hover === 0 && index < rating) || index < hover ? "gold" : ""
            }
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        );
      })}
      <div>
        <button onClick={() => setRating(0)}>Reset</button>
      </div>
    </div>
  );
};

export default StarRating;
