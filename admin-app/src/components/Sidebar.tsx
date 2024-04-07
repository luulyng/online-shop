// components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
