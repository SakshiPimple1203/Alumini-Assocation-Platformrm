import React from 'react';
import './Login.css';
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/login.png';
const Login = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLogin = async (values) => {
    console.log(values);
    // Simulate a login check or make an API call
    const isSuccess = true; // Replace with actual authentication logic
    if (isSuccess) {
      navigate('/dashboard'); // Navigate to the dashboard
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div className="register-container">
      <Card className="form-container">
        <Flex gap="large" align="center">
          {/* Form */}
          <Flex vertical flex={1}>
            <Typography.Title level={3} strong className="title">
              Sign In
            </Typography.Title>
            <Typography.Text type="secondary" strong className="slogan">
              Unlock Your World.
            </Typography.Text>
            <Form
              layout="vertical"
              onFinish={handleLogin}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                  {
                    type: 'email',
                    message: 'The input is not a valid Email!',
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input.Password size="large" placeholder="Enter your Password" />
              </Form.Item>
              {/* {error && (
                <Alert
                  description={error}
                  type="error"
                  showIcon
                  closable
                  className="alert"
                />
              )} */}
              <Form.Item>
                <Button
                  // type={`${loading ? '' : 'primary'}`}
                  htmlType="submit"
                  size="large"
                  className="btn"
                >
                  {/* {loading ? <Spin /> : "Sign In"} */}
                  Sign In
                </Button>
              </Form.Item>
              <Form.Item>
                <Link to="/register">
                  <Button size="large" className="btn">
                    Create an Account
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </Flex>
          {/* Image */}
          <Flex flex={1}>
          <img src={loginImage} className='auth-image' />
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};

export default Login;
