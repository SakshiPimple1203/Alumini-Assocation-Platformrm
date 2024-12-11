import React from 'react';
import './Register.css';
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';
import userSignp from '../../hooks/userSignp';
import registerImage from '../../assets/7314199.webp';



const Register = () => {
const {loading,error,registerUser}=userSignp()

  const handleRegister=(values)=>{
    registerUser(values);

  };

  const SignInButton = () => {
    const navigate = useNavigate();
  };  
  return (
    <div className="register-container">
     <Card className='form-container'>
       <Flex gap="large" align='center'>
        {/* Form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className='title'>
            Create an account
          </Typography.Title>
          <Typography.Text type='secondary' strong className='slogan'>
            Join for exclusive access!
          </Typography.Text>
          <Form 
          layout='vertical' 
          onFinish={handleRegister} 
          autoComplete='off'
          >
           <Form.Item 
           label="Full Name" 
           name="name" 
           rules={[
            {
            required:true,
            message:'please input your full name!',
           },
           ]}>
            <Input size="large" placeholder='Enter your full name'/>
           </Form.Item>
           <Form.Item 
           label="Email" 
           name="email" 
           rules={[
            {
            required:true,
            message:'please input your Email!',
           },
           {
            type:'email',
            message:'The input is not valid Email!',
           },
           ]}>
            <Input size="large" placeholder='Enter your email'/>
           </Form.Item>
           <Form.Item 
           label="Password" 
           name="password" 
           rules={[
            {
            required:true,
            message:'please input your Password!',
           },
           
           ]}>
            <Input.Password size="large" placeholder='Enter your Password'/>
           </Form.Item>
           <Form.Item 
           label="confirmPassword" 
           name="passwordConfirm" 
           rules={[
            {
            required:true,
            message:'please input your Confirm Password!',
           },
           
           ]}>
            <Input.Password size="large" placeholder='Re-enter your Password'/>
           </Form.Item>
          { error &&(
            <Alert 
            description={error} 
            type='error' 
            showIcon 
            closable 
            className='alert'
            />
          )}
           <Form.Item>
            <Button 
            type={`${loading ? '':'primary'}`} 
            htmlType='submit' 
            size='large' 
            className='btn'
            >
              {loading ? <Spin/>:"create Account"}
            </Button>
           </Form.Item>
           <Form.Item>
            <Link to="/login">
              <Button size="large" className="btn">
             Sign In
              </Button>
            </Link>
           </Form.Item>
          </Form>
        </Flex>
        {/* Image */}
        <Flex flex={1}>
          <img src={registerImage} className='auth-image' />
        </Flex>
       </Flex>
     </Card>
     </div>
  )
}

export default Register
