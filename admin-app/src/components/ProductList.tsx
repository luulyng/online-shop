// src/components/ProductList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {
  // Code để lấy danh sách sản phẩm từ API hoặc mock data

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {/* Render danh sách sản phẩm */}
        <li>
          <Link to="/edit/1">Product 1</Link>
        </li>
        <li>
          <Link to="/edit/2">Product 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductList;
