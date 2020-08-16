import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './NewMovie.css';
import Title from '../../components/Title/Title';
import NewMovieImg from '../../assets/images/newMovieImg.png';

const NewMovie = () => {
  const [data, setData] = useState({
    title: '',
    year: '',
  });
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='newMovie-wrapper'>
      <Title>Create a new movie</Title>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-row'>
          <label htmlFor='title' className='form-label'>
            Title*
          </label>
          <input
            type='text'
            name='title'
            id='title'
            className='form-input'
            value={data.title}
            onChange={handleChange}
            ref={register({ required: true })}
          />
          {errors.title && <p className='error'>Title can not be empty</p>}
        </div>
        <div className='form-row'>
          <label htmlFor='year' className='form-label'>
            Publication year
          </label>
          <input
            type='text'
            name='year'
            id='year'
            className='form-input'
            value={data.year}
            onChange={handleChange}
            ref={register}
          />
        </div>
        <div className='buttonsRow'>
          <button className='cancelBtn'>Cancel</button>
          <button className='submitBtn'>Create</button>
        </div>
      </form>
      <figure>
        <img src={NewMovieImg} alt='Tree' className='newMovieImg' />
      </figure>
    </div>
  );
};

export default NewMovie;
