import React from 'react';
import RatingWidget from './RatingWidget';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="rating-info">
        <span>Rating: {product.avgRating.toFixed(1)} ({product.totalRatings} reviews)</span>
      </div>
      <RatingWidget 
        productId={product.id} 
        onRatingSubmit={onRatingSubmit}
      />
    </div>
  );
};

export default ProductCard;