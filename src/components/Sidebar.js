import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/orders">Orders</Link>
      <Link to="/products">Products</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/reviews">Reviews</Link>
    </div>
  );
}

export default Sidebar;
