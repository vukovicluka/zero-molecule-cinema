import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './Form.css';
import { loginUser } from '../../services/login';

const Form = () => {
  const [data, setData] = useState({
    identifier: '',
    password: '',
  });
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    try {
      const result = await loginUser(data);
      if (result.jwt) {
        localStorage.setItem('token', result.jwt);
        history.push('/main');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-row'>
          <label htmlFor='identifier' className='form-label'>
            Email*
          </label>
          <input
            type='text'
            name='identifier'
            id='identifier'
            className='form-input'
            value={data.identifier}
            onChange={handleChange}
            ref={register({ required: true })}
          />
          {errors.identifier && <p className='error'>Email can not be empty</p>}
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password*
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='form-input'
            value={data.password}
            onChange={handleChange}
            ref={register({ required: true })}
          />
          {errors.password && (
            <p className='error'>Password can not be empty</p>
          )}
        </div>
        <button className='loginBtn'>Sign in</button>
      </form>
    </>
  );
};

export default Form;
