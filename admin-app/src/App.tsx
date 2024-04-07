import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './layouts/Layout';
import DashboardPage from './pages/DashboardPage';
import ProductPage from './pages/ProductPage';
import UserPage from './pages/UserPage';
import OrderPage from './pages/OrderPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="orders" element={<OrderPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}