import React from 'react';
import './Login.css';
import LoginImg from '../../assets/images/loginImg.png';
import Form from '../../components/Form/LoginForm';

const Login = () => {
  return (
    <div className='login-wrapper'>
      <div className='form-container'>
        <Form />
      </div>
      <figure>
        <img src={LoginImg} alt='Login' />
      </figure>
    </div>
  );
};

export default Login;
