// Layout.tsx
import { Outlet } from "react-router-dom";
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const { Header, Content, Footer } = Layout;

const LayoutComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Thực hiện các hành động liên quan đến đăng xuất (ví dụ: xóa token khỏi local storage)
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px', flexGrow: 1 }}>
          <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/orders">Orders</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/products">Products</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/users">Users</Link></Menu.Item>
        </Menu>
        {isLoggedIn ? (
          <Button style={{ margin: '0 18px' }} onClick={handleLogout}>Logout</Button>
        ) : (
          <Button style={{ margin: '0 18px' }}><Link to="/login">Login</Link></Button>
        )}
      </Header>

      <Content style={{ padding: '0 50px', marginTop: 50, width: '100%' }}>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>

      <Footer style={{ width: '100%'}}>Footer</Footer>
      
    </Layout>
  );
};

export default LayoutComponent;
