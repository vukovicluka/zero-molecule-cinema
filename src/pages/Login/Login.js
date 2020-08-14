import React from 'react';
import './Login.css';
import LoginImg from '../../assets/images/loginImg.png';
import Form from '../../components/Form/Form';

const Login = () => {
  return (
    <div className='wrapper'>
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
