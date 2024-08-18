import React, { useState, useEffect } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import ProductGrid from '../components/ProductGrid';
import './HomePage.css';


const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="homepage">
      <h1>Discover Our Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque amet amet elementum dolor.
      </p>
      <div className="content">
        <FilterSidebar />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default HomePage;
