// Login.tsx
import { Form, Input, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
    // Xử lý logic đăng nhập ở đây
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Login</h1>
        <Form
          name="login"
          onFinish={onFinish}
          style={{ maxWidth: '300px', margin: '0 auto' }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Log in
            </Button>
          </Form.Item>
        </Form>
        <p>Don't have an account? <Link to="/signup">Sign up now</Link></p>
      </Content>
    </Layout>
  );
};

export default Login;
