// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Products from './components/Products';
import Categories from './components/Categories';
import Admin from './components/Admin';
import Reviews from './components/Reviews';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<Dashboard />} status={404} />
          <Route path="/reviews" element={<Reviews />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
