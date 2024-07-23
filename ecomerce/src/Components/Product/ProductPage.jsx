import React, { useState } from 'react';
import './ProductsPage.css';
import { useParams } from 'react-router-dom';

// Sample product data. Replace this with actual data fetching logic.
const sampleProduct = {
  id: 1,
  name: 'Product Name',
  price: '$99.99',
  description: 'This is a detailed description of the product.',
  images: [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ]
};

const ProductsPage = () => {
  const { id } = useParams(); // Get product ID from URL params
  const [selectedImage, setSelectedImage] = useState(sampleProduct.images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    // Add the product to the cart (implement cart logic here)
    console.log('Product added to cart');
  };

  return (
    <div className="products-page">
      <div className="banner">
        <h2>Featured Products</h2>
        {/* Add banner images or content here */}
      </div>
      <div className="product-details">
        <div className="product-images">
          <img src={require(`../../images/${selectedImage}`)} alt="Selected Product" className="main-image" />
          <div className="thumbnail-images">
            {sampleProduct.images.map((image) => (
              <img
                key={image}
                src={require(`../../images/${image}`)}
                alt="Product Thumbnail"
                className="thumbnail"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1>{sampleProduct.name}</h1>
          <p className="price">{sampleProduct.price}</p>
          <p className="description">{sampleProduct.description}</p>
          <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
