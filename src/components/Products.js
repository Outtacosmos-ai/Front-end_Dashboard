import React, { useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name: productName
    };
    setProducts([...products, newProduct]);
    setProductName(""); // Clear input after submission
  };

  const handleDelete = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
          minLength="3" // Require at least 3 characters
          placeholder="Enter product name"
        />
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} 
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
