import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './Form.css';
import { createMovie } from '../../services/movies';

const EditMovieForm = (props) => {
  const { title, year } = (props.location && props.location.state) || {};

  const [data, setData] = useState({
    title: '',
    year: '',
  });
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  //   useEffect(() => {
  //     setData({
  //       title: title,
  //       year: year,
  //     });
  //   }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    try {
      const createdMovie = await createMovie(
        localStorage.getItem('token'),
        data
      );
      if (createdMovie) {
        history.push('/movieList');
      } else {
        console.log('Error!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
        <div className='form-row'>
          <label htmlFor='cover' className='form-label'>
            Cover image*
          </label>
          <div className='drop'>Drop image here</div>
        </div>
        <div className='buttonsRow'>
          <button className='cancelBtn'>Cancel</button>
          <button className='submitBtn'>Create</button>
        </div>
      </form>
    </div>
  );
};

export default EditMovieForm;
