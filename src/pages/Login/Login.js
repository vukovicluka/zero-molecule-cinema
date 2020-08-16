import React from 'react';
import './Login.css';
import LoginImg from '../../assets/images/loginImg.png';
import LoginForm from '../../components/Form/LoginForm';
import Title from '../../components/Title/Title';

const Login = () => {
  return (
    <div className='login-wrapper'>
      <div>
        <Title>Login</Title>
        <LoginForm />
      </div>
      <figure>
        <img src={LoginImg} alt='Login' />
      </figure>
    </div>
  );
};

export default Login;
