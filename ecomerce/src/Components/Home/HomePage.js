import React from 'react';
import './HomePage.css'; // Create and import a CSS file for styling
import featured1 from '../../images/featured1.jpg';
import featured2 from '../../images/featured2.jpg';
import featured3 from '../../images/featured3.jpg';
import product1 from '../../images/product1.jpg';
import product2 from '../../images/product2.jpg';
import product3 from '../../images/product3.jpg';

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <Products />
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <div className="slide">
        <img src={featured1} alt="Featured Product 1" /> {/* Replace with your images */}
        <img src={featured2} alt="Featured Product 2" />
        <img src={featured3} alt="Featured Product 3" />
      </div>
    </div>
  );
};

const Products = () => {
  const productList = [
    { id: 1, image: product1, name: 'Product 1', price: '$10', description: 'This is a great product.', link: '/products/1' },
    { id: 2, image: product2, name: 'Product 2', price: '$20', description: 'This is another great product.', link: '/products/2' },
    { id: 3, image: product3, name: 'Product 3', price: '$30', description: 'Yet another great product.', link: '/products/3' },
    // Add more products as needed
  ];

  return (
    <div className="products">
      {productList.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <a href={product.link}>Read More</a>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
