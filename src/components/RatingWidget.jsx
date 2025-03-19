import React, { useState } from 'react';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
      setHoveredRating(0);
    }
  };

  return (
    <div className="rating-widget">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className="star-btn"
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(star)}
          >
            <span className={`star ${star <= (hoveredRating || rating) ? 'filled' : ''}`}>
              ★
            </span>
          </button>
        ))}
      </div>
      <button 
        className="submit-btn" 
        onClick={handleSubmit}
        disabled={!rating}
      >
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;