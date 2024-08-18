import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { image, title, price, description, rating } = product;

  const handleAddToCart = () => {
    // Function to handle add to cart action
    console.log(`Added ${title} to cart`);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < Math.round(rating.rate) ? 'filled' : ''}`}
            >
              ★
            </span>
          ))}
          <span className="rating-text">({rating.count})</span>
        </div>
        <p className="product-description">{description}</p>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
