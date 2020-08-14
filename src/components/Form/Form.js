import React from 'react';
import './Form.css';
import Title from '../Title/Title';

const Form = () => {
  return (
    <>
      <Title>Login</Title>
      <form className='form'>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email*
          </label>
          <input type='text' name='email' className='form-input' />
          <p className='error'>Email can not be empty</p>
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password*
          </label>
          <input type='password' name='password' className='form-input' />
        </div>
        <button className='loginBtn'>Sign in</button>
      </form>
    </>
  );
};

export default Form;
