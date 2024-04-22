// src/components/Categories.js
import React, { useState } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCategory = {
      id: categories.length + 1,
      name: categoryName
    };
    setCategories([...categories, newCategory]);
    setCategoryName(""); // Clear input after submission
  };

  const handleDelete = (categoryId) => {
    setCategories(categories.filter(category => category.id !== categoryId));
  };

  return (
    <div>
      <h1>Categories</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
          minLength="3" // Require at least 3 characters
          placeholder="Enter category name"
        />
        <button type="submit">Add Category</button>
      </form>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name} 
            <button onClick={() => handleDelete(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
